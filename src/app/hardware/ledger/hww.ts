import TransportWebHID from '@ledgerhq/hw-transport-webhid';
import AppBtc from '@ledgerhq/hw-app-btc';

// Function to connect to the Ledger device and fetch a Bitcoin address
export async function connectToLedger(): Promise<{ bitcoinAddress: string; publicKey: string; chainCode: string } | undefined> {
  try {
    // Initialize a transport connection via WebHID
    const transport = await TransportWebHID.create();
    console.log('Transport connected:', transport);

    // Initialize the Bitcoin application on the Ledger
    const btcApp = new AppBtc({ transport });

    // Example derivation path (BIP44 for Bitcoin)
    const path = "44'/0'/0'/0/0";

    // Retrieve the address and public key from Ledger
    const { bitcoinAddress, publicKey, chainCode } = await btcApp.getWalletPublicKey(path);
    console.log('Bitcoin Address:', bitcoinAddress);
    console.log('Public Key:', publicKey);
    console.log('Chain Code:', chainCode);

    return { bitcoinAddress, publicKey, chainCode };
  } catch (err) {
    console.error('Error connecting to Ledger:', err);
    return undefined;
  }
}