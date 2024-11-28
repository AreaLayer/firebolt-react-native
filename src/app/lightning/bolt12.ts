import { Bolt12 } from "@breeztech/react-native-breez-sdk-liquid";

const LnOffer = {
  bolt12: Bolt12,
};

export type LnOffer = typeof LnOffer;

export const bolt12 = LnOffer.bolt12;

export default LnOffer;
