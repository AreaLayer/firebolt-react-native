import { LiquidNetwork, LiquidAddressData } from "@breeztech/react-native-breez-sdk-liquid";

export const LiquidgetAddressData = async (network: LiquidNetwork, address: string): Promise<LiquidAddressData> => {
    return await LiquidNetwork.getLiquidAddressData(network, address);
}

export const LiquidNetworkUtils = {
    LiquidgetAddressData,
}