import BreezSdk, {
  SwapAmountType,
  redeemSwap,
  rescanSwaps,
  ReverseSwapFeesRequest,
  getSwapStatus,
  reverseSwapFees
} from "@breeztech/react-native-breez-sdk";

// Initialize the SDK instance
const breezSdk = new BreezSdk();

breezSdk.init({
  apiKey: "YOUR_API_KEY",
  apiUrl: "https://api.breez.technology/v1",
  websocketUrl: "wss://api.breez.technology/v1",
  network: "bitcoin",
  networkType: "bitcoin",
  networkName: "Bitcoin",
}).catch((error) => {
  console.error("Initialization Error:", error);
});

// Redeem a swap
export const redeemSwapById = async (swapId: string) => {
  try {
    const redeemSwapResponse = await redeemSwap(swapId);
    return redeemSwapResponse;
  } catch (error) {
    console.error("Redeem Swap Error:", error);
  }
};

// Handle Swap Amount Type
export const handleSwapAmountType = async (swapAmountType: SwapAmountType) => {
  try {
    const swapAmountTypeResponse = await someFunctionHandlingSwapAmountType(swapAmountType);
    return swapAmountTypeResponse;
  } catch (error) {
    console.error("Swap Amount Type Handling Error:", error);
  }
};

// Get the status of a swap
export const getSwapStatusById = async (swapId: string) => {
  try {
    const swapStatus = await getSwapStatus(swapId);
    return swapStatus;
  } catch (error) {
    console.error("Get Swap Status Error:", error);
  }
};

// Rescan all swaps
export const rescanAllSwaps = async () => {
  try {
    const rescanSwapsResponse = await rescanSwaps();
    return rescanSwapsResponse;
  } catch (error) {
    console.error("Rescan Swaps Error:", error);
  }
};

// Get reverse swap fees
export const getReverseSwapFees = async (request: ReverseSwapFeesRequest) => {
  try {
    const reverseSwapFeesResponse = await reverseSwapFees(request);
    return reverseSwapFeesResponse;
  } catch (error) {
    console.error("Get Reverse Swap Fees Error:", error);
  }
};

