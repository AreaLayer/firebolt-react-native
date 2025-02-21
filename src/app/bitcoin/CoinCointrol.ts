import * as bitcoin from 'bitcoinjs-lib';
import { ECPairInterface, ECPairFactory } from 'ecpair';
import * as tinysecp from '@bitcoin-js/tiny-secp256k1-asmjs';

// Initialize ECPair with tinysecp256k1-asmjs
const ECPair = ECPairFactory(tinysecp);

// Define interfaces
interface UTXO {
    txid: string;
    vout: number;
    value: number;
    scriptPubKey: Buffer;
    address: string;
}

interface Wallet {
    utxos: UTXO[];
    privateKeys: Map<string, ECPairInterface>;
}

// Create a new wallet
function createWallet(): Wallet {
    return {
        utxos: [],
        privateKeys: new Map(),
    };
}

// Add a UTXO to the wallet
function addUTXO(
    wallet: Wallet,
    txid: string,
    vout: number,
    value: number,
    scriptPubKey: Buffer,
    address: string
) {
    wallet.utxos.push({ txid, vout, value, scriptPubKey, address });
}

// Select UTXOs sufficient to cover the amount
function selectUTXOs(wallet: Wallet, amount: number): UTXO[] {
    const selectedUTXOs: UTXO[] = [];
    let totalValue = 0;

    for (const utxo of wallet.utxos) {
        totalValue += utxo.value;
        selectedUTXOs.push(utxo);

        if (totalValue >= amount) {
            break;
        }
    }

    if (totalValue < amount) {
        throw new Error('Insufficient funds');
    }

    return selectedUTXOs;
}

// Create a transaction
function createTransaction(
    selectedUTXOs: UTXO[],
    outputs: { address: string; value: number }[],
    network: bitcoin.Network = bitcoin.networks.bitcoin
): bitcoin.Psbt {
    const psbt = new bitcoin.Psbt({ network });
    
    // Add inputs
    for (const utxo of selectedUTXOs) {
        psbt.addInput({
            hash: utxo.txid,
            index: utxo.vout,
            nonWitnessUtxo: Buffer.from(utxo.scriptPubKey), // Simplified for example
        });
    }

    // Add outputs
    for (const output of outputs) {
        psbt.addOutput({
            address: output.address,
            value: output.value,
        });
    }

    return psbt;
}

// Sign the transaction
function signTransaction(
    wallet: Wallet,
    psbt: bitcoin.Psbt,
    selectedUTXOs: UTXO[]
) {
    selectedUTXOs.forEach((utxo, index) => {
        const keyPair = wallet.privateKeys.get(utxo.address);
        if (!keyPair) {
            throw new Error(`No private key found for address: ${utxo.address}`);
        }

        psbt.signInput(index, {
            publicKey: Buffer.from(keyPair.publicKey),
            sign: (hash: Buffer) => Buffer.from(keyPair.sign(hash))
        });
    });    
    psbt.finalizeAllInputs();
    return psbt.extractTransaction();
}

// Example usage
const wallet: Wallet = createWallet();

// Generate a key pair for testing
const keyPair = ECPair.makeRandom();
const { address } = bitcoin.payments.p2pkh({ pubkey: Buffer.from(keyPair.publicKey) });
// Add a test private key
wallet.privateKeys.set(address!, keyPair);

// Add a test UTXO
addUTXO(
    wallet,
    '0000000000000000000000000000000000000000000000000000000000000000',
    0,
    15000000, // 0.15 BTC in satoshis
    Buffer.from('76a914' + '0'.repeat(40) + '88ac', 'hex'), // Dummy scriptPubKey
    address!
);

const amount = 10000000; // 0.1 BTC in satoshis
const recipientAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'; // Example recipient (Satoshi's address)

try {
    // Select UTXOs
    const selectedUTXOs = selectUTXOs(wallet, amount);

    // Create transaction outputs
    const outputs = [{ address: recipientAddress, value: amount }];

    // Create and sign transaction
    const psbt = createTransaction(selectedUTXOs, outputs);
    const signedTx = signTransaction(wallet, psbt, selectedUTXOs);

    // Get the transaction hex
    const txHex = signedTx.toHex();
    console.log('Transaction hex:', txHex);

    // Note: To broadcast, you'd need to use a Bitcoin node API or service
    // await broadcastTransaction(txHex);
} catch (error) {
    console.error('Transaction failed:', error);
}