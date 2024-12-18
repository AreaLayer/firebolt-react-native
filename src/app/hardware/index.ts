import TrezorConnect, { Params, SignTransaction } from '@trezor/connect';

async function connectToTrezor() {
  try {
    // Initialize Trezor Connect
    TrezorConnect.init({
      manifest: {
        email: 'your-email@example.com', // Your email address (required for Trezor policy compliance)
        appUrl: 'https://your-app-url.com', // Your application's URL
      },
    });

    // Check device and get public key
    const response = await TrezorConnect.getPublicKey({
      path: "m/44'/0'/0'/0/0", // Example BIP44 path (update according to your requirements)
    });

    if (response.success) {
      console.log('Public Key:', response.payload.publicKey);
      console.log('Serialized Path:', response.payload.serializedPath);
      console.log('XPub:', response.payload.xpub);
    } else {
      console.error('Failed to connect:', response.payload.error);
    }
  } catch (error) {
    console.error('An error occurred while connecting to Trezor:', error);
  }
}
// Example of signing a transaction with Trezor
async function signTransaction(transaction: Params<SignTransaction>) {
  try {
    const response = await TrezorConnect.signTransaction(transaction);

    if (response.success) {
      console.log('Transaction Signed:', response.payload);
      return response.payload.signatures;
    } else {
      console.error('Transaction signing failed:', response.payload.error);
      return null;
    }
  } catch (error) {
    console.error('An error occurred while signing transaction with Trezor:', error);
    return null;
  }
}
// Export reusable functions for connecting and using Trezor
export const Trezor = {
  connect: connectToTrezor,
  signTransaction,
};
