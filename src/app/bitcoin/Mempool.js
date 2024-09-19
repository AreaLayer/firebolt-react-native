import {mempoolJS, RBF, Address, AddressUTXO, BlockTransactionID, MempooBlockFees, MempoolRBFTransactions}  from '@mempool/mempool.js';

class Mempool {
  constructor() {
      this.mempool = new mempoolJS.Mempool();
  }
}
const mempool = new mempoolJS.Mempool();

const mempoolBlockFees = new MempooBlockFees();
const mempoolRBFTransactions = new MempoolRBFTransactions();

const BlockTransactionID = new BlockTransactionID();
const Address = new Address();
const AddressUTXO = new AddressUTXO();

const RBF = new RBF();

constRBF.getRBFTransactions();

export {mempool, mempoolBlockFees, mempoolRBFTransactions, BlockTransactionID, Address, AddressUTXO, RBF};