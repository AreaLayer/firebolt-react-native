import {Balance, Payment, BackupStatus, BitcoinAddressData, CheckMessageRequest} from 'react-native-breez-sdk';

export default class Breez {
  static async getBalance(): Promise<Balance> {
    return await BreezNative.getBalance();
  }
}
export async getPayment(): Promise<Payment> {
  if (Platform.OS === 'android') {
    await BreezNative.requestPermissions();
    return await BreezNative.getPayment();
  }
}
  static async getBackupStatus(): Promise<BackupStatus> {
    return await BreezNative.getBackupStatus();
  }
export async getBitcoinAddressData(): Promise<BitcoinAddressData> {
    return await BreezNative.getBitcoinAddressData();
  }
export async checkMessage(request: CheckMessageRequest): Promise<boolean> {
    return await BreezNative.checkMessage(request);
  }
  static async getVersion(): Promise<string> {
    return await BreezNative.getVersion();
  }