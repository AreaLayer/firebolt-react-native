import { 
  Payment, 
  BackupStatus, 
  BitcoinAddressData, 
  CheckMessageRequest, 
  ClosedChannelPaymentDetails, 
  CheckMessageResponse, 
  SendOnchainRequest, 
  SendPaymentRequest, 
  SendOnchainResponse,
} from '@breeztech/react-native-breez-sdk';

import { LnOffer, Bolt11, Bolt12Offer } from '@breeztech/react-native-breez-sdk-liquid';

import { GreenlightNodeConfig } from '@breeztech/react-native-breez-sdk';
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

export interface LnOffer {
  offer: string;
  chains: string;
  paths: LnOfferBlindedPath[];
  minAmount: number;
  bolt11: string;
  bolt12Offer: string; 
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

// Define action types
type SendAction =
  | { type: 'SET_PAYMENT'; payload: Payment }
  | { type: 'SET_BACKUP_STATUS'; payload: BackupStatus }
  | { type: 'SET_BITCOIN_ADDRESS_DATA'; payload: BitcoinAddressData }
  | { type: 'SET_CHECK_MESSAGE_REQUEST'; payload: CheckMessageRequest }
  | { type: 'SET_CLOSED_CHANNEL_PAYMENT_DETAILS'; payload: ClosedChannelPaymentDetails }
  | { type: 'SET_CHECK_MESSAGE_RESPONSE'; payload: CheckMessageResponse }
  | { type: 'SET_SEND_ONCHAIN_REQUEST'; payload: SendOnchainRequest }
  | { type: 'SET_SEND_PAYMENT_REQUEST'; payload: SendPaymentRequest }
  | { type: 'SET_SEND_ONCHAIN_RESPONSE'; payload: SendOnchainResponse };

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
      return { ...state, sendOnchainResponse: action.payload };
    default:
      return state;  // Ensure the state is returned if action type doesn't match any case
  }
};