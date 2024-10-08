import { SwapAmountType } from "@breeztech/react-native-breez-sdk";
import { redeemSwap } from "@breeztech/react-native-breez-sdk";
import { rescanSwaps} from "@breeztech/react-native-breez-sdk";
import { ReverseSwapFeesRequest } from "@breeztech/react-native-breez-sdk";

const swapBitcoin = new SwapBitcoin();

swapBitcoin.init({
    apiKey: "YOUR_API_KEY",
    apiSecret: "YOUR_API_SECRET",
    apiUrl: "https://api.breez.technology/v1",
    websocketUrl: "wss://api.breez.technology/v1",
    network: "bitcoin",
    networkType: "bitcoin",
    networkName: "Bitcoin",
});

export const redeemSwap = async (swapId: string) => {
  const redeemSwapResponse = await redeemSwap(swapId);
  return redeemSwapResponse;
};

export const SwapAmountType = async (
  swapAmountType: SwapAmountType
) => {
  const swapAmountTypeResponse = await swapAmountType(swapAmountType);
  return swapAmountTypeResponse;
};
export GetSwapStatus = async (swapId: string) => {
  const swapStatus = await getSwapStatus(swapId);
  return swapStatus;
};

export const getSwap = async (swapId: string) => {
  const swap = await getSwap(swapId);
  return swap;
};
export const rescanSwaps = async () => {
  const rescanSwapsResponse = await rescanSwaps();
  return rescanSwapsResponse;
};

export const reverseSwapFees = async (
  request: ReverseSwapFeesRequest
) => {
  const reverseSwapFeesResponse = await reverseSwapFees(request);
  return reverseSwapFeesResponse;
};

export const getSwapStatus = async (swapId: string) => {
  const swapStatus = await getSwapStatus(swapId);
  return swapStatus;
};