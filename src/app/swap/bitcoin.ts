import {
  SwapAmountType,
  redeemSwap,
  rescanSwaps,
  ReverseSwapFeesRequest,
  getSwapStatus,
  reverseSwapFees
} from "@breeztech/react-native-breez-sdk";

const breezSdk = new BreezSdk();

breezSdk.init({
  apiKey: "YOUR_API_KEY",
  apiUrl: "https://api.breez.technology/v1",
  websocketUrl: "wss://api.breez.technology/v1",
  network: "bitcoin",
  networkType: "bitcoin",
  networkName: "Bitcoin",
});

// Redeem a swap
export const redeemSwapById = async (swapId: string) => {
  const redeemSwapResponse = await redeemSwap(swapId);
  return redeemSwapResponse;
};

// Handle Swap Amount Type
export const handleSwapAmountType = async (swapAmountType: SwapAmountType) => {
  const swapAmountTypeResponse = await someFunctionHandlingSwapAmountType(swapAmountType);
  return swapAmountTypeResponse;
};

// Get the status of a swap
export const getSwapStatusById = async (swapId: string) => {
  const swapStatus = await getSwapStatus(swapId);
  return swapStatus;
};

// Rescan swaps
export const rescanAllSwaps = async () => {
  const rescanSwapsResponse = await rescanSwaps();
  return rescanSwapsResponse;
};

// Get reverse swap fees
export const getReverseSwapFees = async (request: ReverseSwapFeesRequest) => {
  const reverseSwapFeesResponse = await reverseSwapFees(request);
  return reverseSwapFeesResponse;
};
