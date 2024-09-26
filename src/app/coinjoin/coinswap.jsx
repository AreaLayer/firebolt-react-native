const bitcoin = require('bitcoinjs-lib');
const axios = require('axios');
const { BitcoinConverter } = require('./bitcoin_converter.json'); // Ensure your converter is imported
const { TX } = require('@mempool/mempool.js'); // Ensure TX is imported for transaction handling
const { groth16 } = require('snarkjs'); // Import snarkjs for ZK proof generation

// Bitcoin network configuration
const network = bitcoin.networks.signet;

let converter = new BitcoinConverter(); // Initialize BitcoinConverter

// Generate a new Bitcoin address
function generateAddress() {
  const keyPair = bitcoin.ECPair.makeRandom({ network });
  const { address } = bitcoin.payments.p2tr({ pubkey: keyPair.publicKey, network });
  
  return { address, privateKey: keyPair.toWIF() };
}

// Fetch unspent transaction outputs (UTXOs) for an address
async function getUTXOs(address) {
  const response = await axios.get(`https://api.blockcypher.com/v1/btc/test4/addrs/${address}/full`);
  return response.data.txrefs.filter(utxo => utxo.spent === false);
}

// Create and sign the swap transaction
async function createSwapTransaction(inputAddress, outputAddress, amount, fee) {
  const utxos = await getUTXOs(inputAddress.address); // Fetch UTXOs for the input address
  const keyPair = bitcoin.ECPair.fromWIF(inputAddress.privateKey, network);

  const txb = new bitcoin.TransactionBuilder(network);
  let totalInput = 0;

  for (const utxo of utxos) {
    txb.addInput(utxo.tx_hash, utxo.tx_output_n);
    totalInput += utxo.value;
  }

  const totalOutput = amount + fee;
  txb.addOutput(outputAddress, amount); // Add the output address with the specified amount
  txb.addOutput(inputAddress.address, totalInput - totalOutput); // Change output

  for (let i = 0; i < utxos.length; i++) {
    txb.sign(i, keyPair); // Sign each input
  }

  const txHex = txb.build().toHex(); // Build and get hex of the transaction
  return txHex; // Return the transaction hex
}

// Broadcast the transaction to the Bitcoin network
async function broadcastTransaction(transaction) {
  try {
    const response = await axios.post('https://api.blockcypher.com/v1/btc/test4/txs/push', {
      tx: transaction,
    });
    console.log('Transaction broadcasted:', response.data.tx.hash);
  } catch (error) {
    console.error('Error broadcasting transaction:', error.response.data);
  }
}

// Example usage
async function run() {
  // Generate a new Bitcoin address
  const inputAddress = generateAddress();
  console.log('Input Address:', inputAddress.address);

  // Destination address for swapped coins (can be replaced with actual output address)
  const outputAddress = generateAddress().address; // For demo, generate a new address
  
  // Amount and fee for the swap transaction
  const amount = converter.btcToSatoshis(0.01); // Convert to satoshis
  const fee = converter.btcToSatoshis(0.0001); // Convert to satoshis

  // Create and sign the swap transaction
  const transaction = await createSwapTransaction(inputAddress, outputAddress, amount, fee);
  console.log('Swap Transaction:', transaction);

  // Broadcast the transaction
  await broadcastTransaction(transaction);
}

run().catch(console.error);
