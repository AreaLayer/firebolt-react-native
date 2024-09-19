import { listLsps } from "@breeztech/react-native-breez-sdk";

export const getLSPs = async () => {
  const lsps = await listLsps();
  return lsps;
};

export default getLSPs;