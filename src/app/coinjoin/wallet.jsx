import {coinjoinxt_config,lightning_confing} from './config.js';
import {Wallet} from 'wallet-tools';
import {WalletDir, PublicKey, UTXO} from 'bitcoinjs-lib';

function load_coinjoinxt_config() {
    return coinjoinxt_config;
}

function load_lightning_config() {
    return lightning_confing;
}

function load_wallet_dir() {
    return WalletDir.getInstance();
}
function load_wallet(wallet_dir) {
    return new Wallet(wallet_dir);
}

function PublicKey (key) {
    return new PublicKey(key);
}

function TXID
(txid) {
    return new TXID(txid);
}

function UTXO
(txid, vout) {
    return new UTXO(txid, vout);
}

function PaymentHash
(payment_hash) {
    return new PaymentHash(payment_hash);
}
