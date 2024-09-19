import { Payment, BackupStatus, BitcoinAddressData, CheckMessageRequest, ClosedChannelPaymentDetails, CheckMessageResponse, SendOnchainRequest, SendPaymentRequest, SendOnchainResponse } from '@breeztech/react-native-breez-sdk';

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

export const sendReducer = (state = initialState, action: SendAction): SendState => {
  switch (action.type) {
    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };
    case 'SET_BACKUP_STATUS':
      return { ...state, backupStatus: action.payload };
    case 'SET_BITCOIN_ADDRESS_DATA':
      return { ...state, bitcoinAddressData: action.payload };
    case 'SET_CHECK_MESSAGE_REQUEST':
      return { ...state, checkMessageRequest: action.payload };
    case 'SET_CLOSED_CHANNEL_PAYMENT_DETAILS':
      return { ...state, closedChannelPaymentDetails: action.payload };
    case 'SET_CHECK_MESSAGE_RESPONSE':
      return { ...state, checkMessageResponse: action.payload };
    case 'SET_SEND_ONCHAIN_REQUEST':
      return { ...state, sendOnchainRequest: action.payload };
    case 'SET_SEND_PAYMENT_REQUEST':
      return { ...state, sendPaymentRequest: action.payload };
    case 'SET_SEND_ONCHAIN_RESPONSE':
      return { ...state, sendOnchainResponse: action.payload
    };

export const sendOnchainRequest: (request: SendOnchainRequest) => SendAction = (request) => ({
  type: 'SET_SEND_ONCHAIN_REQUEST',
  payload: request,
});

export const sendOnchainResponse: (response: SendOnchainResponse) => SendAction = (response) => ({
  type: 'SET_SEND_ONCHAIN_RESPONSE',
  payload: response,
});
