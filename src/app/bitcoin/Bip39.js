const  { randomBytes } = require('crypto');
const { bip39 } = require('bitcoinjs-lib');
// Generate a random mnemonic (uses crypto.randomBytes under the hood), defaults to 128-bits of entropy
const bip39 = require('bip39');

// Generate a random mnemonic (uses crypto.randomBytes under the hood), defaults to 128-bits of entropy
const mnemonic128 = bip39.generateMnemonic();
console.log("Generated Mnemonic (128-bits): ", mnemonic128);

// Convert mnemonic to seed
const seed128 = bip39.mnemonicToSeedSync(mnemonic128).toString('hex');
console.log("Corresponding Seed (128-bits): ", seed128);

// Generate a random mnemonic with 256 bits of entropy
const mnemonic256 = bip39.generateMnemonic(256);
console.log("Generated Mnemonic (256-bits): ", mnemonic256);

// Convert mnemonic to seed
const seed256 = bip39.mnemonicToSeedSync(mnemonic256).toString('hex');
console.log("Corresponding Seed (256-bits): ", seed256);

// Random byte array of 16 bytes (128-bits)
const randomBytes128 = randomBytes(16);

// Random byte array of 32 bytes (256-bits)
const randomBytes256 = randomBytes(32);