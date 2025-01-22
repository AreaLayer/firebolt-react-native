import { RefundableSwap as BreezSwapLiquid } from "@breeztech/react-native-breez-sdk-liquid";

// Define an interface for the Liquid swap
export interface SwapLiquidInterface {
  swap(): unknown;
  swapLiquid: BreezSwapLiquid;
}

// Create an instance of the SDK for Liquid swaps
const breezSwapLiquid = new BreezSwapLiquid();

// Initialize the SDK instance
breezSwapLiquid.init({
  apiKey: "YOUR_API_KEY",
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
