import * as bitcoin from 'bitcoinjs-lib';
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';

// Step 1: Generate a mnemonic and seed
const mnemonic = bip39.generateMnemonic();
console.log('Mnemonic:', mnemonic);

const seed = bip39.mnemonicToSeedSync(mnemonic);

// Step 2: Create the root node from the seed
const root = bip32.BIP32Factory(bitcoin.networks.bitcoin).fromSeed(seed);

// Step 3: Derive the Taproot account node (m/86'/0'/0')
const taprootPath = "m/86'/0'/0'";
const accountNode = root.derivePath(taprootPath);

// Step 4: Generate the Taproot (P2TR) address
const taprootPublicKey = accountNode.publicKey;
const taprootAddress = bitcoin.payments.p2tr({
  pubkey: taprootPublicKey,
}).address;

console.log('Taproot Address:', taprootAddress);

