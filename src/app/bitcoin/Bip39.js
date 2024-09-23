const { randomBytes } = require('crypto');
const bip39 = require('bip39');
const bip32 = require('bip32');

// Network
const networks = bitcoin.networks.signet;

// Function to generate a mnemonic and derive keys
function generateKeys(accountIndex) {
    // Generate a random mnemonic
    const mnemonic = bip39.generateMnemonic();
    const randomBytesrandombytes = randomBytes(32);
    console.log("Generated Mnemonic: ", mnemonic);

    // Convert mnemonic to seed
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    console.log("Corresponding Seed: ", seed.toString('hex'));

    // Create a BIP32 root node
    const root = bip32.fromSeed(seed);

    // Derivation paths for SegWit and Taproot
    const segwitPath = `m/84'/0'/${accountIndex}'`;
    const taprootPath = `m/86'/0'/${accountIndex}'`;

    // Derive SegWit key
    const segwitKey = root.derivePath(segwitPath);
    const segwitAddress = bitcoin.payments.p2wpkh({ pubkey: segwitKey.publicKey }).address;
    console.log("SegWit Public Key: ", segwitKey.publicKey.toString('hex'));
    console.log("SegWit Address (P2WPKH): ", segwitAddress);

    // Derive Taproot key
    const taprootKey = root.derivePath(taprootPath);
    const taprootAddress = bitcoin.payments.p2tr({ pubkey: taprootKey.publicKey }).address;
    console.log("Taproot Public Key: ", taprootKey.publicKey.toString('hex'));
    console.log("Taproot Address (P2TR): ", taprootAddress);
}

// Example usage with different account indices
generateKeys(0); // Account 0
generateKeys(1); // Account 1