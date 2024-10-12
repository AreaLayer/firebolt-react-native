// Removed unused import statement

export const generateInvoice = async (amount: number, memo: string, network: Network) => {
  try {
    const invoice = await LSP.generateInvoice(amount, memo, network);
    return BOLT11.encode(invoice);
  } catch (error) {
    console.error("Error generating invoice:", error);
    throw error;
  }
}

export const decodeInvoice = async (invoice: string, network: Network) => {
  try {
    const decodedInvoice = await BOLT11.decode(invoice);
    return LSP.decodeInvoice(decodedInvoice, network);
  } catch (error) {
    console.error("Error decoding invoice:", error);
    throw error;
  }
}

export const encodeInvoice = async (invoice: LSP.Invoice, network: Network) => {
  try {
    const encodedInvoice = await LSP.encodeInvoice(invoice, network);
    return BOLT11.encode(encodedInvoice);
  } catch (error) {
    console.error("Error encoding invoice:", error);
    throw error;
  }
}

export const getBalance = async (network: Network) => {
  try {
    const balance = await LSP.getBalance(network);
    return balance;
  } catch (error) {
    console.error("Error getting balance:", error);
    throw error;
  }
}
