import { NDKNostrRpc, NostrEvent } from '@nostr-dev-kit/ndk';

// Initialize the NDK
const ndk = new NostrRpc();
const ndkEvent = new NostrEvent();

// Generate a new key pair
const keyPair = ndk.keys.generate();

// Display the private and public keys
console.log('Private Key:', keyPair.privateKey);
console.log('Public Key:', keyPair.publicKey);
