import { GetBalance, Balance, Payment, BackupStatus, BitcoinAddressData, CheckMessageRequest, ClosedChannelPaymentDetails, CheckMessageResponse, SendPaymentInfo, Interface } from '@breeztech/react-native-breez-sdk';

export default class Breez {
  static async getBalance(): Promise<Balance> {
    // Removed the incorrect await syntax
    return await GetBalance.getBalance();
  }

  static async getBackupStatus(): Promise<BackupStatus> {
    return await this.getBackupStatus.getBackupStatus();
  }

  static async getBitcoinAddress(): Promise<string> {
    return await getBitcoinAddress.getBitcoinAddress();
  }

  static async getVersion(): Promise<string> {
    return await this.getVersion.getVersion();
  }
}

export async function getPayment(): Promise<Payment> {
  // Corrected the if statement syntax and added missing parentheses
  if (Platform.OS === 'android') {
    await requestPermissions.requestPermissions();
  }
  return await getPayment.getPayment();
}

export async function getBitcoinAddressData(): Promise<BitcoinAddressData> {
  return await BreezNative.getBitcoinAddressData();
}

export async function checkMessage(request: CheckMessageRequest): Promise<boolean> {
  return await BreezNative.checkMessage(request);
}

export async function getClosedChannelPaymentDetails(): Promise<ClosedChannelPaymentDetails> {
  return await BreezNative.getClosedChannelPaymentDetails();
}

export async function checkMessageResponse(request: CheckMessageResponse): Promise<boolean> {
  return await BreezNative.checkMessageResponse(request);
}

export async function sendPayment(request: SendPaymentInfo): Promise<boolean> {
  // Removed the 'readonly' keyword from the function body, which is not valid syntax here
  // Corrected the function to actually send the payment request
  return await BreezNative.sendPayment(request);
}

export async function getInterface(): Promise<Interface> {
  // Added return statement and corrected the function definition to match the return type
  return {
    breezserver: '',
    chainnotifierUrl: '',
    mempoolspaceUrl: '',
    workingDir: '',
    network: Network,
    paymentTimeoutSec: 0,
    defaultLspId: '',
    apiKey: '',
    maxfeePercent: 0,
    exemptfeeMsat: 0,
    nodeConfig: {
      // Add the properties of NodeConfig here
    }
  };
}
