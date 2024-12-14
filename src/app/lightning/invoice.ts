import { LnInvoice, createInvoice as breezCreateInvoice, Offer } from "@breeztech/react-native-breez-sdk";
import { getInvoice } from "./bolt11";

export type Invoice = LnInvoice;
export { getInvoice };

// Wrap the SDK's createInvoice function
export const createInvoice = async (amount: number, memo: string, offer: string): Promise<Invoice> => {
  try {
    const invoice = await breezCreateInvoice(amount, memo);
    return invoice;
  } catch (error) {
    console.error("Error creating invoice:", error);
    throw error;
  }
};


