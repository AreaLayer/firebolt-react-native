import { RefundableSwap, SwapLiquid } from "@breeztech/react-native-breez-sdk-liquid";

export interface SwapLiquid {
    swapLiquid: RefundableSwap;
}
const swapLiquid = new SwapLiquid();

swapLiquid.init({
    apiKey: "YOUR_API_KEY",
    apiSecret: "YOUR_API_SECRET",
    apiUrl: "https://api.breez.technology/v1",
    websocketUrl: "wss://api.breez.technology/v1",
    network: "liquid",
    networkType: "liquid",
    networkName: "Liquid",
});

swapLiquid.on("error", (error: any) => {
    console.log("Error: ", error);
});
