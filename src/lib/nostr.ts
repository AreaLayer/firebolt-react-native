import { NDK } from 'nostr-dev-kit';

// Initialize the NDK
const ndk = new NDK();

// Generate a new key pair
const keyPair = ndk.keys.generate();

// Display the private and public keys
console.log('Private Key:', keyPair.privateKey);
console.log('Public Key:', keyPair.publicKey);
