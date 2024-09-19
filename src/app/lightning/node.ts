import { NodeConfig, NodeConfigVariant, EnvironmentType, defaultConfig, BreezEvent, mnemonicToSeed } from '@breeztech/react-native-breez-sdk';
import { ConnectRequest, connect } from '@breeztech/react-native-breez-sdk-liquid';

// SDK events listener
const BreezEvent = (e: BreezEvent) => {
    console.log(`Received event ${e.type}`)
  }
  
  (async () => {
    try {
      // Create the default config
      const seed = await mnemonicToSeed('<mnemonics words>')
      const inviteCode = '<invite code>'
      const apiKey = '<api key>'
      const nodeConfig: NodeConfig = {
        type: NodeConfigVariant.GREENLIGHT,
        config: {
          inviteCode
        }
      }
    
      const config = await defaultConfig(
        EnvironmentType.PRODUCTION,
        apiKey,
        nodeConfig
      )

      console.log(`Working directory: ${config.workingDir}`)
      // config.workingDir = "path to writable directory"
    
      // Connect to the Breez SDK make it ready for use
      const connectRequest: ConnectRequest = {
        config: {
          ...config,
          liquidElectrumUrl: 'https://liquid-electrum-server.example.com',
          bitcoinElectrumUrl: 'https://bitcoin-electrum-server.example.com',
          zeroConfMinFeeRateMsat: 1000,
          mempoolspaceUrl: config.mempoolspaceUrl || ''
        },
        seed
      }

      await connect(connectRequest)
    } catch (err) {
      console.error(err)
    }
  })