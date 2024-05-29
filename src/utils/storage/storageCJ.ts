// coinjoin.ts
import * as bitcoin from 'bitcoinjs-lib';
import WebSocket from 'ws';

const network = bitcoin.networks.testnet; // Use testnet for development

function createTransaction(inputs: bitcoin.TransactionInput[], outputs: bitcoin.TransactionOutput[]) {
    const txb = new bitcoin.TransactionBuilder(network);

    inputs.forEach(input => {
        txb.addInput(input.hash, input.index);
    });

    outputs.forEach(output => {
        txb.addOutput(output.address, output.amount);
    });

    return txb;
}

function signTransaction(txb: bitcoin.TransactionBuilder, keyPairs: bitcoin.ECPairInterface[]) {
    keyPairs.forEach((keyPair, index) => {
        txb.sign(index, keyPair);
    });

    return txb.build().toHex();
}

// Example usage with WebSocket client
const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to CoinJoin server');

    // Example inputs and outputs
    const inputs = [
        { hash: 'txid1', index: 0 },
        { hash: 'txid2', index: 1 }
    ];

    const outputs = [
        { address: 'address1', amount: 10000 },
        { address: 'address2', amount: 20000 }
    ];

    // Create and sign transaction
    const txb = createTransaction(inputs, outputs);
    const keyPairs = inputs.map(() => bitcoin.ECPair.makeRandom({ network }));
    const signedTx = signTransaction(txb, keyPairs);

    // Send signed transaction to server
    ws.send(JSON.stringify({ type: 'signedTx', data: signedTx }));
});

ws.on('message', (message) => {
    console.log('Received:', message.toString());
    const parsedMessage = JSON.parse(message.toString());

    if (parsedMessage.type === 'signedTx') {
        console.log('Received signed transaction:', parsedMessage.data);
    }
});
