import as { LSP } from 'react-native-breez';

export const generateInvoice = async (amount: number, memo: string, network: LSP.Network) => {
  const invoice = await LSP.generateInvoice(amount, memo, network);
  return invoice;
}

export const decodeInvoice = async (invoice: string, network: LSP.Network) => {
  const decodedInvoice = await LSP.decodeInvoice(invoice, network);
  return decodedInvoice;
}

export const encodeInvoice = async (invoice: LSP.Invoice, network: LSP.Network) => {
  const encodedInvoice = await LSP.encodeInvoice(invoice, network);
  return encodedInvoice;
}

export const getBalance = async (network: LSP.Network) => {
  const balance = await LSP.getBalance(network);
  return balance;
}

export const getAddress = async (network: LSP.Network) => {
  const address = await LSP.getAddress(network);
  return address;
}

export const getTransactions = async (network: LSP.Network) => {
  const transactions = await LSP.getTransactions(network);
  return transactions;
}

export const getTransaction = async (txid: string, network: LSP.Network) => {
  const transaction = await LSP.getTransaction(txid, network);
  return transaction;
}