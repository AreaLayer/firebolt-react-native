import { 
  ReceiveOnchainRequest, 
  ReceivePaymentRequest, 
  RedeemOnchainFundsRequest, 
  ReceivePaymentResponse, 
  RecommendedFees 
} from "@breeztech/react-native-breez-sdk";

// Async functions for handling requests
export const receiveOnchain = async (request: ReceiveOnchainRequest): Promise<ReceivePaymentResponse> => {
    return await breez.receiveOnchain(request);
}

export const receivePayment = async (request: ReceivePaymentRequest): Promise<ReceivePaymentResponse> => {
    return await breez.receivePayment(request);
}

export const redeemOnchainFunds = async (request: RedeemOnchainFundsRequest): Promise<ReceivePaymentResponse> => {
    return await breez.redeemOnchainFunds(request);
}

export const getRecommendedFees = async (): Promise<RecommendedFees> => {
    return await breez.getRecommendedFees();
}

export const getWalletBalance = async (): Promise<number> => {
    return await breez.getWalletBalance();
}

// Class to handle swap information
class SwapInfo {
  static bitcoinAddress: string;
  static minAllowedDeposit: number;
  static maxAllowedDeposit: number;

  constructor() {
    const address = SwapInfo.bitcoinAddress;
    console.log(`Minimum amount allowed to deposit in sats: ${SwapInfo.minAllowedDeposit}`);
    console.log(`Maximum amount allowed to deposit in sats: ${SwapInfo.maxAllowedDeposit}`);
  }
}

// Class for refundable operations with proper async handling
class Refundables {
  static async processRefundables() {
    const refundables = await breez.listRefundables(); // Assuming listRefundables() is part of breez
    const toAddress = '...'; // Replace with the actual address
    const satPerVbyte = 5;

    const refundResponse = await breez.refund({
      swapAddress: refundables[0].bitcoinAddress,
      toAddress,
      satPerVbyte
    });

    console.log(`Refund response: ${refundResponse}`);
  }
}

// Example of using async/await properly
const amountMsat = 10000;

const openChannelFeeResponse = await breez.openChannelFee({
  amountMsat
});

console.log(`Open Channel Fee Response: ${openChannelFeeResponse}`);

  