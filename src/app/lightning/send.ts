import {Balance, Payment, BackupStatus, BitcoinAddressData, CheckMessageRequest, ClosedChannelPaymentDetails, CheckMessageResponse, 
        SendPaymentInfo
       } from 'react-native-breez-sdk';

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
  static async getBitcoinAddress(): Promise<string> {
    return await BreezNative.getBitcoinAddress();
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
export async getClosedChannelPaymentDetails(): Promise<ClosedChannelPaymentDetails> {
    return await BreezNative.getClosedChannelPaymentDetails();
  }
export async checkMessageResponse(request: CheckMessageResponse): Promise<boolean> {
    return await BreezNative.checkMessageResponse(request);
  }
export async sendPayment(request: SendPaymentInfo): Promise<boolean> {
  readonly request: SendPaymentInfo = {
    amount: 1000000,
    address: '1234567890',
    memo: 'test',
    paymentId: '1234567890',
    paymentPreimage: '1234567890'
  }
}
