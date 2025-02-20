import { RefundableSwap as BreezSwapLiquid } from "@breeztech/react-native-breez-sdk-liquid";

// Define an interface for the Liquid swap
export interface SwapLiquidInterface {
  swap(): unknown;
  swapLiquid: BreezSwapLiquid;
}

const swapLiquid: SwapLiquidInterface = {
  swap: () => {
    return new Promise((resolve, reject) => {
      // Perform swap operation here
      // For example: breezSwapLiquid.performSwap()
      // If successful, call resolve()
      // If error occurs, call reject(error)
    })
    .then(() => {
      console.log("Swap successful");
    })
    .catch((error: any) => {
      console.error("Swap error:", error);
    });
  },
  swapLiquid: BreezSwapLiquid,
};

export const RefundableSwap = {
  swapLiquid,
};
// Initialize the SDK instance
breezSwapLiquid.init({
  apiKey.env: "YOUR_API_KEY",
  apiUrl: "https://api.breez.technology/v1",
  websocketUrl: "wss://api.breez.technology/v1",
  network: "liquid",
  networkType: "liquid",
  networkName: "Liquid",
}).catch((error) => {
  console.error("Initialization Error:", error);
});

// Handle error events if the SDK supports event listeners
if (typeof breezSwapLiquid.on === "function") {
  breezSwapLiquid.on("error", (error: any) => {
    console.error("Error:", error);
  });
}
