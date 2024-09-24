import { LnInvoice } from "@breeztech/react-native-breez-sdk";
import { getInvoice } from "./bolt11";
import { createInvoice } from "@breeztech/react-native-breez-sdk";

export default LnInvoice;

export type Invoice = LnInvoice;
export { getInvoice };

export const createInvoice = async (amount: number, memo: string) => {
    return await createInvoice(amount, memo);


}


