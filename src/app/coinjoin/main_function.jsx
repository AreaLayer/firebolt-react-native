const {Transaction, Psbt, txDetails} = require('bitcoinjs-lib');
const {TX}= require('@mempool/mempool.js');
const { BitcoinConverter } = require('./bitcoin_converter.json');
const { Coinjoin, CoinjoinTransaction, createMultisigTransaction, createP2PTransaction, } = require('./main_function.jsx');

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
  // const txid = await provider.send('createCoinjoinTransaction', {
  //   inputs,
  //   outputs,
  // });
};

// Multisig and PSBT transaction
async function createMultisigTransaction(inputs, outputs) {
  const tx = new TX();
  const txid = tx.createMultisigTransaction(inputs, outputs);
  return txid;
};

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

// Funtion to PSBT sign
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

// Funtion to brodcast the transation with mempool tx
async function broadcastTransactionWithMempoolTx(txid) {
  const tx = new TX();
  const broadcastedTx = tx.broadcastTransactionWithMempoolTx(txid);
  return broadcastedTx;
}

// Function to get the transaction details
async function getTransactionDetails(txid) {
  const tx = new TX();
  const txDetails = tx.getTransactionDetails(txid);
  return txDetails;
}

// ZK proofs
// TODO implementation