import { ReceiveOnchainRequest, ReceivePaymentRequest, RedeemOnchainFundsRequest, ReceivePaymentResponse, RecommendedFees} from "@breeztech/react-native-breez-sdk";

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