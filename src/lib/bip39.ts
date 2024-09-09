import * as bip39 from 'bip39';

// Generate a 12-word mnemonic
const mnemonic: string = bip39.generateMnemonic();
console.log('Generated Mnemonic:', mnemonic);

// Validate a mnemonic
const isValid: boolean = bip39.validateMnemonic(mnemonic);
console.log('Is Valid Mnemonic:', isValid);

// Convert mnemonic to seed
const seed: Buffer = bip39.mnemonicToSeedSync(mnemonic);
console.log('Seed:', seed.toString('hex'));

// Convert mnemonic to seed using async version
bip39.mnemonicToSeed(mnemonic).then((seed) => {
    console.log('Async Seed:', seed.toString('hex'));
});

// Optional: Use a specific language wordlist (for example, Japanese)
const mnemonicJP: string = bip39.generateMnemonic(undefined, undefined, bip39.wordlists.japanese);
console.log('Japanese Mnemonic:', mnemonicJP);
