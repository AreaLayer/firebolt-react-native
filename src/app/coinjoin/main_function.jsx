const { TX } = require('@mempool/mempool.js');
const { BitcoinConverter } = require('./bitcoin_converter.json');
const { groth16 } = require('snarkjs');
const { Coinjoin, CoinjoinTransaction, createCoinjoinTransaction, finalizeCoinjoinTransaction } = require('main_function.jsx');
const bitcoin = require('bitcoinjs-lib').networks.signet;

let converter = new BitcoinConverter();

let satoshis = converter.btcToSatoshis(0.001);
console.log(satoshis); // 100000

let btcAmount = converter.satoshisToBtc(100000);
console.log(btcAmount); // 0.001

class Coinjoin {
  constructor(txid, vout, amount, address, isEntering) {
    this.txid = txid;
    this.vout = vout;
    this.amount = amount;
    this.address = address;
    this.proof = null;
    this.payments = null;
    this.isEntering = isEntering; // Boolean flag to indicate whether the user is entering or exiting
  }
}

class CoinjoinTransaction {
  constructor(txid, vout, amount, address) {
    this.txid = txid;
    this.vout = vout;
    this.amount = amount;
    this.address = address;
  }
}

// ZK proof-related functions
async function generateProof(inputs) {
  const { proof, publicSignals } = await groth16.fullProve(inputs, 'circuit.wasm', 'circuit_0000.zkey');
  const { p2tr } = await p2tr.fromOutputScript(inputs[0].address);
  const { p2wsh } = await p2wsh.fromOutputScript(inputs[0].address);
  const payments = {
    p2wsh: payments.p2wsh(p2wsh),
    p2tr: payments.p2tr(p2tr)
  };
  const { output } = payments.addressToOutputScript(inputs[0].address);
  return { proof, publicSignals };
}

async function verifyProof(proof, publicSignals) {
  const verificationKey = require('./verification_key.json');
  const isValid = await groth16.verify(verificationKey, publicSignals, proof);
  return isValid;
}

// Function to create a Coinjoin transaction with ZK proof and RBF
async function createCoinjoinTransaction(inputs, outputs) {
  const tx = new TX();

  // Generate ZK proof for the Coinjoin inputs
  const inputsForProof = {
    txid: inputs[0].txid,
    amount: inputs[0].amount,
    address: inputs[0].address,
    vout: inputs[0].vout,
    outputs: outputs.map(output => ({
      address: output.address,
      amount: output.amount
    }))
  };

  const { proof, publicSignals } = await generateProof(inputsForProof);

  // Verify the generated proof
  const isValid = await verifyProof(proof, publicSignals);
  if (!isValid) {
    throw new Error("Invalid ZK proof");
  }

  // Add inputs and outputs to the Coinjoin transaction with RBF enabled
  inputs.forEach(input => {
    tx.addInput(input.txid, input.vout, 0xfffffffd); // RBF enabled with sequence 0xfffffffd
  });
  
  outputs.forEach(output => {
    tx.addOutput(output.address, output.amount);
  });

  // Proceed with creating the Coinjoin transaction
  const txid = await tx.createCoinjoinTransaction(inputs, outputs);
  return txid;
}

// Function to handle RBF and potential griefing attacks
async function handleRBF(coinjoinTransaction, newInput) {
  const tx = new TX();
  
  // Add new input with RBF enabled
  tx.addInput(newInput.txid, newInput.vout, 0xfffffffd); // RBF enabled

  // Optionally implement a fee bumping mechanism here if needed
  const feeIncreasePercentage = 1.1; // Example: increase fee by 10%
  const currentFee = coinjoinTransaction.getFee();
  const newFee = Math.floor(currentFee * feeIncreasePercentage);
  
  tx.setFee(newFee);
  
  // Finalize the Coinjoin transaction
  const finalizedTx = await finalizeCoinjoinTransaction(coinjoinTransaction);
  return finalizedTx;
}

// Function to finalize the Coinjoin transaction
async function finalizeCoinjoinTransaction(coinjoinTransaction) {
  const tx = new TX();
  const finalizedTx = tx.finalizeTransaction(coinjoinTransaction);
  return finalizedTx;
}

// Handle entering the Coinjoin pool
async function enterPool(inputs, outputs) {
  // The user is entering the pool, their inputs become part of the Coinjoin
  const enteredInputs = inputs.map(input => new Coinjoin(input.txid, input.vout, input.amount, input.address, true));
  const txid = await createCoinjoinTransaction(enteredInputs, outputs);
  return txid;
}

// Handle exiting the Coinjoin pool
async function exitPool(inputs, outputs) {
  // The user is exiting the pool, their outputs are returned after ZK proof
  const exitedOutputs = outputs.map(output => new CoinjoinTransaction(output.txid, output.vout, output.amount, output.address));
  const txid = await createCoinjoinTransaction(inputs, exitedOutputs);
  return txid;
}

// Example usage
(async () => {
  try {
    // User entering the pool
    const enteringInputs = [new Coinjoin('txid1', 0, 100000, 'address1', true)];
    const poolOutputs = [{ address: 'address2', amount: 50000 }, { address: 'address3', amount: 50000 }];
    const coinjoinTxid = await enterPool(enteringInputs, poolOutputs);
    console.log(`Coinjoin transaction created with ID: ${coinjoinTxid}`);

    // User exiting the pool
    const exitingInputs = [new Coinjoin('txid2', 1, 100000, 'address4', false)];
    const exitOutputs = [{ address: 'address5', amount: 50000 }, { address: 'address6', amount: 50000 }];
    const updatedTx = await exitPool(exitingInputs, exitOutputs);
    console.log(`Exit Coinjoin transaction finalized: ${updatedTx}`);

  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
})();
