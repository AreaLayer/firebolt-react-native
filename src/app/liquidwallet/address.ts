import { LiquidNetwork, LiquidAddressData } from "@breeztech/react-native-breez-sdk-liquid";

import { SwapLiquidInterface } from "../swap/liquid";

export const LiquidgetAddressData = async (network: LiquidNetwork, address: string): Promise<LiquidAddressData> => {
    return await LiquidAddressData.getAddressData(network, address);

}

export const SwapLiquid = async (swap: SwapLiquidInterface) => {
    return await swap.swap();
}
export const LiquidNetworkUtils = {
    LiquidgetAddressData,
}

export const LiquidNetworkConfig = {
    mainnet: LiquidNetwork.MAINNET,
    testnet: LiquidNetwork.TESTNET,
}

export const feeRate = 1000;

export const feeRateTestnet = 1000;

export const feeRateMainnet = 1000;

export const explorer = {
    mainnet: "https://blockstream.info/liquid",
    testnet: "https://blockstream.info/liquidtestnet",
}

export const BreezAPI = {
    mainnet: "https://api.breez.technology/v2",
    testnet: "https://api.breez.technology/v1",
}