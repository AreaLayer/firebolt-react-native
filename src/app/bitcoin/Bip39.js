const { randomBytes } = require('crypto');
const bip39 = require('bip39');
const bip32 = require('bip32');

// Generate a random mnemonic (uses crypto.randomBytes under the hood)
const mnemonic = bip39.generateMnemonic();
console.log("Generated Mnemonic: ", mnemonic);

// Convert mnemonic to seed
const seed = bip39.mnemonicToSeedSync(mnemonic);
console.log("Corresponding Seed: ", seed.toString('hex'));

// Create a BIP32 root node
const root = bip32.fromSeed(seed);

// Derivation paths
const segwitPath = "m/84'/0'/0'";  // Change 0 to your account index if needed
const taprootPath = "m/86'/0'/0'";  // Change 0 to your account index if needed

// Derive SegWit key
const segwitKey = root.derivePath(segwitPath);
console.log("SegWit Public Key: ", segwitKey.publicKey.toString('hex'));

// Derive Taproot key
const taprootKey = root.derivePath(taprootPath);
console.log("Taproot Public Key: ", taprootKey.publicKey.toString('hex'));

