import { LnInvoice } from "@breeztech/react-native-breez-sdk";
import { getInvoice } from "./bolt11";

export default LnInvoice;

export type Invoice = LnInvoice;
export { getInvoice };