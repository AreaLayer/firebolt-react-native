import {
  NodeConfig,
  NodeConfigVariant,
  EnvironmentType,
  defaultConfig,
  BreezEvent as BreezEventType,
  mnemonicToSeed
} from '@breeztech/react-native-breez-sdk';
import { ConnectRequest, connect } from '@breeztech/react-native-breez-sdk-liquid';

// SDK events listener
export const handleBreezEvent = (e: BreezEventType) => {
  console.log(`Received event: ${e.type}`);
}

// Example of how to attach event listener
// breezSdk.addEventListener(handleBreezEvent);

(async () => {
  try {
    // Generate seed from mnemonic
    const seed = await mnemonicToSeed('<mnemonic words>');
    const inviteCode = '<invite code>';
    const apiKey = '<8f8d008e70631589e7f73f451bf79b2b4ad34c1b65e75b8ede87c9653df82a8>';

    // Set up the node configuration
    const nodeConfig: NodeConfig = {
      type: NodeConfigVariant.GREENLIGHT,
      config: {
        inviteCode,
      },
    };

    // Get the default configuration
    const config = await defaultConfig(
      EnvironmentType.PRODUCTION,
      apiKey,
      nodeConfig
    );

    console.log(`Working directory: ${config.workingDir}`);

    // Optional: Set a writable directory if needed
    // config.workingDir = "path to writable directory";

    // Connect to the Breez SDK
    const connectRequest: ConnectRequest = {
      config: {
        ...config,
        liquidElectrumUrl: 'https://elements-testnet.blockstream.info:50002',
        bitcoinElectrumUrl: 'https://bitcoin-testnet.blockstream.info:50002',
        zeroConfMinFeeRateMsat: 1000,
        mempoolspaceUrl: config.mempoolspaceUrl || '', // Ensure default URL if it's missing
      },
      seed,
    };

    await connect(connectRequest);
    console.log('Successfully connected to Breez SDK');
  } catch (err) {
    console.error('Error connecting to Breez SDK:', err);
  }
})();

