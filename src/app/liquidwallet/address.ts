import { LiquidNetwork, LiquidAddressData } from "@breeztech/react-native-breez-sdk-liquid";

export const LiquidgetAddressData = async (network: LiquidNetwork, address: string): Promise<LiquidAddressData> => {
    return await LiquidNetwork.LiquidgetAddressData(network, address);
}

export const LiquidNetworkUtils = {
    LiquidgetAddressData,
}

export const LiquidNetworkConfig = {
    mainnet: LiquidNetwork.MAINNET,
    testnet: LiquidNetwork.TESTNET,
}

export const feeRate = 1000;