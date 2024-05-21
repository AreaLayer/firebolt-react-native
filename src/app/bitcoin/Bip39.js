const bip39 = require('bip39');

// Generate a random mnemonic (uses crypto.randomBytes under the hood), defaults to 128-bits of entropy
const mnemonic = bip39.generateMnemonic();
console.log("Generated Mnemonic: ", mnemonic);

// Convert mnemonic to seed
const seed = bip39.mnemonicToSeedSync(mnemonic).toString('hex');
console.log("Corresponding Seed: ", seed);

const bip39 = require('bip39');

// Generate a random mnemonic with 256 bits of entropy
const mnemonic = bip39.generateMnemonic(256);
console.log("Generated Mnemonic: ", mnemonic);

// Convert mnemonic to seed
const seed = bip39.mnemonicToSeedSync(mnemonic).toString('hex');
console.log("Corresponding Seed: ", seed);
