const { Transaction, Psbt, txDetails, MinerFee } = require('bitcoinjs-lib');
const { TX } = require('@mempool/mempool.js');
const { BitcoinConverter } = require('./bitcoin_converter.json');
const { Coinjoin, CoinjoinTransaction, createMultisigTransaction, createP2PTransaction } = require('./main_function.jsx');

// Connect to the Bitcoin signet network
const provider = 'https://signet.mempool.space/api';
const explorer = 'https://mempool.space/signet/tx';

// Stats fee
const statsTxFee = 10000;

let converter = new BitcoinConverter();

let satoshis = converter.btcToSatoshis(0.001);
console.log(satoshis); // 100000

let btcAmount = converter.satoshisToBtc(100000);
console.log(btcAmount); // 0.001

class Coinjoin {
  constructor(txid, vout, amount, address) {
    this.txid = txid;
    this.vout = vout;
    this.amount = amount;
    this.address = address;
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

// Function to create a Coinjoin transaction
async function createCoinjoinTransaction(inputs, outputs) {
  const tx = new TX();
  const txid = tx.createCoinjoinTransaction(inputs, outputs);
  return txid;
}

// Multisig and PSBT transaction
async function createMultisigTransaction(inputs, outputs) {
  const tx = new TX();
  const txid = tx.createMultisigTransaction(inputs, outputs);
  return txid;
}

// Peer to Peer transaction
async function createP2PTransaction(inputs, outputs) {
  const tx = new TX();
  const txid = tx.createP2PTransaction(inputs, outputs);
  return txid;
}

// Function to get the transaction details
async function getTransactionDetails(txid) {
  const tx = new TX();
  const txDetails = tx.getTransactionDetails(txid);
  return txDetails;
}

// Function to sign PSBT
async function signPSBT(psbt) {
  const tx = new TX();
  const signedPSBT = tx.signPSBT(psbt);
  return signedPSBT;
}

// Function to broadcast the transaction
async function broadcastTransaction(txid) {
  const tx = new TX();
  const broadcastedTx = tx.broadcastTransaction(txid);
  return broadcastedTx;
}

// Function to broadcast the transaction with mempool TX
async function broadcastTransactionWithMempoolTx(txid) {
  const tx = new TX();
  const broadcastedTx = tx.broadcastTransactionWithMempoolTx(txid);
  return broadcastedTx;
}

// Function to validate Coinjoin inputs
async function validateCoinjoinInputs(inputs) {
  const tx = new TX();
  const validInputs = [];
  for (const input of inputs) {
    const isUnspent = await tx.checkIfUnspent(input.txid, input.vout);
    if (isUnspent) {
      validInputs.push(input);
    }
  }
  return validInputs;
}

// Function to calculate transaction fee
async function calculateTransactionFee(inputs, outputs, feeRatePerByte = 10) {
  const tx = new TX();
  const estimatedSize = tx.estimateTransactionSize(inputs, outputs);
  const fee = estimatedSize * feeRatePerByte;
  const MinerFee = MinerFee * 100000000;
  return fee;
}

// Function to add an input to Coinjoin
async function addInputToCoinjoin(coinjoinTransaction, newInput) {
  coinjoinTransaction.inputs.push(newInput);
  return coinjoinTransaction;
}

// Function to add an output to Coinjoin
async function addOutputToCoinjoin(coinjoinTransaction, newOutput) {
  coinjoinTransaction.outputs.push(newOutput);
  return coinjoinTransaction;
}

// Function to finalize Coinjoin transaction
async function finalizeCoinjoinTransaction(coinjoinTransaction) {
  const tx = new TX();
  const finalizedTx = tx.finalizeTransaction(coinjoinTransaction);
  return finalizedTx;
}

// Function to split the change output
function splitChangeOutput(changeOutput, participants) {
  const amountPerParticipant = changeOutput.amount / participants.length;
  return participants.map(participant => ({
    address: participant.address,
    amount: amountPerParticipant,
  }));
}

// ZK proofs
// TODO implementation