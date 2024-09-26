import { coinjoinxt_config, lightning_confing } from './config.js';
import { Wallet } from 'wallet-tools';
import { WalletDir } from 'bitcoinjs-lib';

// Load the CoinjoinXT configuration
function load_coinjoinxt_config() {
    return coinjoinxt_config;
}

// Load the Lightning configuration
function load_lightning_config() {
    return lightning_confing;
}

// Load the wallet directory using bitcoinjs-lib
function load_wallet_dir() {
    return WalletDir.getInstance();
}

// Load a wallet from the specified directory
function load_wallet(wallet_dir) {
    return new Wallet(wallet_dir);
}

// PublicKey wrapper
function PublicKey(key) {
    return new bitcoin.ECPair.fromPublicKey(Buffer.from(key, 'hex')); // Converts to Bitcoin PublicKey
}

// TXID wrapper
function TXID(txid) {
    return txid; // TXID is a string, return as-is or do any further manipulation if required
}

// UTXO wrapper, txid and vout used to identify UTXOs
function UTXO(txid, vout) {
    return { txid, vout }; // Creates a UTXO object
}

// PaymentHash wrapper, typically used in Lightning for payment preimages
function PaymentHash(payment_hash) {
    return payment_hash; // Return payment hash as-is
}

// Example usage of the functions
async function example() {
    const walletDir = load_wallet_dir(); // Load the wallet directory
    const wallet = load_wallet(walletDir); // Load wallet from the directory

    console.log('Loaded Wallet:', wallet);

    // Example: Create a UTXO object
    const txid = 'your-txid-here';
    const vout = 1;
    const utxo = UTXO(txid, vout);
    console.log('UTXO:', utxo);

    // Example: Use the PublicKey function
    const publicKeyHex = 'your-public-key-hex';
    const pubKey = PublicKey(publicKeyHex);
    console.log('Public Key:', pubKey.publicKey.toString('hex'));
}

example().catch(console.error);
