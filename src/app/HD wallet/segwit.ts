import * as bitcoin from 'bitcoinjs-lib';
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';

// Generate a mnemonic and seed
const mnemonic = bip39.generateMnemonic();
console.log('Mnemonic:', mnemonic);

const seed = bip39.mnemonicToSeedSync(mnemonic);

// Create the root node from the seed
const root = bip32.fromSeed(seed);

// Networks (mainnet by default, change to bitcoin.networks.testnet for testnet)
const network = bitcoin.networks.bitcoin;

// Function to derive the account node based on BIP paths
function deriveAccountNode(root: bip32.BIP32Interface, path: string): bip32.BIP32Interface {
  return root.derivePath(path);
}

// Generate P2SH-P2WPKH (SegWit) address
function generateP2SH_P2WPKH(accountNode: bip32.BIP32Interface): string {
  const keyPair = bitcoin.ECPair.fromPrivateKey(accountNode.privateKey as Buffer);
  const p2wpkh = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network });
  const p2sh = bitcoin.payments.p2sh({ redeem: p2wpkh, network });
  return p2sh.address as string;
}

// Generate P2WPKH (Native SegWit) address
function generateP2WPKH(accountNode: bip32.BIP32Interface): string {
  const keyPair = bitcoin.ECPair.fromPrivateKey(accountNode.privateKey as Buffer);
  const p2wpkh = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network });
  return p2wpkh.address as string;
}
// BIP paths
const paths = {
  p2sh_p2wpkh: "m/49'/0'/0'/0/0", // BIP-49 path
  p2wpkh: "m/84'/0'/0'/0/0",      // BIP-84 path
};

// Derive account nodes
const accountNodeP2SH_P2WPKH = deriveAccountNode(root, paths.p2sh_p2wpkh);
const accountNodeP2WPKH = deriveAccountNode(root, paths.p2wpkh);

// Generate addresses
const p2sh_p2wpkhAddress = generateP2SH_P2WPKH(accountNodeP2SH_P2WPKH);
const p2wpkhAddress = generateP2WPKH(accountNodeP2WPKH);

// Output addresses
console.log('P2SH-P2WPKH Address (SegWit):', p2sh_p2wpkhAddress);
console.log('P2WPKH Address (Native SegWit):', p2wpkhAddress);