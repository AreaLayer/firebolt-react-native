import {BOLT11, LSP, Network, BOLT12} from 'react-native-bree-sdk';

export const generateInvoice = async (amount: number, memo: string, network: Network) => {
  const invoice = await LSP.generateInvoice(amount, memo, network);
  return BOLT11.encode(invoice);
}
export const decodeInvoice = async (invoice: string, network: Network) => {
  const decodedInvoice = await BOLT11.decode(invoice);
  return LSP.decodeInvoice(decodedInvoice, network);
}

export const encodeInvoice = async (invoice: LSP.Invoice, network: Network) => {
  const encodedInvoice = await LSP.encodeInvoice(invoice, network);
  return BOLT11.encode(encodedInvoice);
}
export const getBalance = async (network: Network) => {
  const balance = await LSP.getBalance(network);
  return balance;
}