import { Payment, BackupStatus, BitcoinAddressData, CheckMessageRequest, ClosedChannelPaymentDetails, CheckMessageResponse, SendOnchainRequest, SendPaymentRequest, SendOnchainResponse, sendPayment, sendSpontaneousPayment } from '@breeztech/react-native-breez-sdk';
export interface SendState {
  payment: Payment | null;
  backupStatus: BackupStatus | null;
  bitcoinAddressData: BitcoinAddressData | null;
  checkMessageRequest: CheckMessageRequest | null;
  closedChannelPaymentDetails: ClosedChannelPaymentDetails | null;
  checkMessageResponse: CheckMessageResponse | null;
  sendOnchainRequest: SendOnchainRequest | null;
  sendPaymentRequest: SendPaymentRequest | null;
  sendOnchainResponse: SendOnchainResponse | null;
}

export const initialState: SendState = {
  payment: null,
  backupStatus: null,
  bitcoinAddressData: null,
  checkMessageRequest: null,
  closedChannelPaymentDetails: null,
  checkMessageResponse: null,
  sendOnchainRequest: null,
  sendPaymentRequest: null,
  sendOnchainResponse: null,
};
const bolt11: string = ''  
const optionalAmountMsat = 3000000
  const optionalLabel = '<label>'
  const _ = await sendPayment({
    bolt11,
    amountMsat: optionalAmountMsat,
    label: optionalLabel
})