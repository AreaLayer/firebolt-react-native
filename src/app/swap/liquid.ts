import { RefundableSwap as BreezSwapLiquid } from "@breeztech/react-native-breez-sdk-liquid";

// Define an interface for the liquid swap
export interface SwapLiquidInterface {
  swapLiquid: RefundableSwap;
}

// Create an instance of the SDK for liquid swaps
const breezSwapLiquid = new BreezSwapLiquid();

breezSwapLiquid.init({
  apiKey: "YOUR_API_KEY",
  apiUrl: "https://api.breez.technology/v1",
  websocketUrl: "wss://api.breez.technology/v1",
  network: "liquid",
  networkType: "liquid",
  networkName: "Liquid",
});

// Handle error events (assuming `on` method exists in the SDK)
breezSwapLiquid.on("error", (error: any) => {
  console.log("Error: ", error);
});
