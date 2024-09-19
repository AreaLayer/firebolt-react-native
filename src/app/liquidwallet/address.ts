import { LiquidNetwork, LiquidAddressData } from "@breeztech/react-native-breez-sdk-liquid";

export const getAddressData = async (network: LiquidNetwork, address: string): Promise<LiquidAddressData> => {
    return await LiquidNetwork.getAddressData(network, address);
}

export const getAddressDataFromBIP44 = async (network: LiquidNetwork, bip44Path: string): Promise<LiquidAddressData> => {
    return await LiquidNetwork.getAddressDataFromBIP44(network, bip44Path);
}

export const getAddressDataFromBIP44Path = async (network: LiquidNetwork, bip44Path: string): Promise<LiquidAddressData> => {
    return await LiquidNetwork.getAddressDataFromBIP44Path(network, bip44Path);
}


export const LiquidNetworkUtils = {
    getAddressData,
    getAddressDataFromBIP44,
    getAddressDataFromBIP44Path,
}