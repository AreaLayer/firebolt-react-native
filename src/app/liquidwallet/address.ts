import { LiquidNetwork, LiquidAddressData } from "@breeztech/react-native-breez-sdk-liquid";

export const LiquidgetAddressData = async (network: LiquidNetwork, address: string): Promise<LiquidAddressData> => {
    return await LiquidNetwork.LiquidGetAddressData(network, address);
}

export const LiquidNetworkUtils = {
    LiquidgetAddressData,
}

export const LiquidNetworkConfig = {
    mainnet: LiquidNetwork.MAINNET,
    testnet: LiquidNetwork.TESTNET,
}

export const feeRate = 1000;

export const BreezAPI = {
    mainnet: "https://api.breez.technology/v1",
    testnet: "https://api.breez.technology/v1",
}