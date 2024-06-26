import {mempoolJS, RBF, Address, AddressUTXO, BlockTransactionID, MempooBlockFees, MempoolRBFTransactions}  from '@mempool/mempool.js';

const mempool = new mempoolJS();

mempool.on('rbf_transactions',
  (rbfTransactions: MempoolRBFTransactions) => {
    console.log(rbfTransactions);
  }
  );

  mempool.on('block_fees',
  (blockFees: MempooBlockFees) => {
    console.log(blockFees);
  }
  );
const address = new Address('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq');

mempool.subscribeToAddress(address);

mempool.unsubscribeFromAddress(address);

mempool.subscribeToBlockTransaction(new BlockTransactionID('0000000000000000000000000000000000000000000000000000000000000000', 0));

mempool.AddressUTXO(address).then(
  (utxos: AddressUTXO[]) => {
    console.log(utxos);
  }
);

mempool.AddressUTXO(address, 10).then(
  (utxos: AddressUTXO[]) => {
    console.log(utxos);
  }
);

mempool.RBF(address).then(
  (rbf: RBF) => {
    console.log(rbf);
  }
);

mempool.RBF(address, 10).then(
  (rbf: RBF) => {
    console.log(rbf);
  }
);

mempool.RBF(address, 10, 10).then(
  (rbf: RBF) => {
    console.log(rbf);
  }
);

mempool.RBF(address, 10, 10, 10).then(
  (rbf: RBF) => {
    console.log(rbf);
  }
);