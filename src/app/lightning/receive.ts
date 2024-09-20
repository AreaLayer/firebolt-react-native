import { ReceiveOnchainRequest, ReceivePaymentRequest, RedeemOnchainFundsRequest, ReceivePaymentResponse, RecommendedFees } from "@breeztech/react-native-breez-sdk";
import breez from "./breez";

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
class SwapInfo {
  constructor() {
    const address = SwapInfo.bitcoinAddress
    console.log(`Minimum amount allowed to deposit in sats: ${SwapInfo.minAllowedDeposit}`)
    console.log(`Maximum amount allowed to deposit in sats: ${SwapInfo.maxAllowedDeposit}`)
  }
}

class Refudables {
    const refundables = await listRefundables() {
    const toAddress = '...'
    const satPerVbyte = 5
  
    const refundResponse = await refund({
      swapAddress: refundables[0].bitcoinAddress,
      toAddress,
      satPerVbyte
    )
    }
    }
  };

  const amountMsat = 10000
  const openChannelFeeResponse = await openChannelFee({
    amountMsat
  )}

  