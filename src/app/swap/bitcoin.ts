import { SwapAmountType } from "@breeztech/react-native-breez-sdk";
import { SwapStatus } from "@breeztech/react-native-breez-sdk";
import { redeemSwap } from "@breeztech/react-native-breez-sdk";
import { useBreez } from "@breeztech/react-native-breez-sdk";
import { rescanSwaps} from "@breeztech/react-native-breez-sdk";
import { ReverseSwapFeesRequest } from "@breeztech/react-native-breez-sdk";
import { useEffect, useState } from "react";

export const useSwap = () => {
  const breez = useBreez();
  const [swapStatus, setSwapStatus] = useState<SwapStatus>();
  const [swapAmountType, setSwapAmountType] = useState<SwapAmountType>();
  const [swapAmount, setSwapAmount] = useState<number>();
  const [swapAmountUsd, setSwapAmountUsd] = useState<number>();
  const [swapFees, setSwapFees] = useState<number>();
  const [swapFeesUsd, setSwapFeesUsd] = useState<number>();
  const [swapFeesUsdReverse, setSwapFeesUsdReverse] = useState<number>();
  const [swapFeesUsdReverseReverse, setSwapFeesUsdReverseReverse] = useState<number>();
  const [swapFeesUsdReverseReverseReverse, setSwapFeesUsdReverseReverseReverse] = useState<number>();
  const [swapFeesUsdReverseReverseReverseReverse, setSwapFeesUsdReverseReverseReverseReverse] = useState<number>();
  const [swapFeesUsdReverseReverseReverseReverseReverse, setSwapF
    FeesUsdReverseReverseReverseReverseReverse] = useState<number>();
  }

export const redeemSwap = async (swapId: string) => {
  const redeemSwapResponse = await redeemSwap(swapId);
  return redeemSwapResponse;
};