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

