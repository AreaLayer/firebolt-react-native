import { LiquidNetwork, LiquidAddressData, ListPaymentsRequest, AssetMetadata } from "@breeztech/react-native-breez-sdk-liquid";

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

export const ListPayments = async (request: ListPaymentsRequest): Promise<any> => {
    return await ListPayments(request);
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

export const assetMetaData: AssetMetadata = {
    assetId: '6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d',
    name: 'Bitcoin',
    ticker: 'BTC',
    precision: 8
}
export const assetBalances = {
    assetId: '6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d',
    amount: 10000000000000000,
}