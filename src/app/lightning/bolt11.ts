import { ListPaymentsRequest, LnPaymentDetails, LnInvoice } from '@breeztech/react-native-breez-sdk';

export const listPayments = async (request: ListPaymentsRequest): Promise<LnPaymentDetails[]> => {
  const response = await fetch('https://api.breez.technology/v1/payments/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });
  const data = await response.json();
  return data.payments;
};

export const getInvoice = async (invoice: LnInvoice): Promise<LnPaymentDetails> => {
  const response = await fetch('https://api.breez.technology/v1/payments/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(invoice),
  });
  const data = await response.json();
  return data.payment;
};

export const getPayment = async (payment: LnPaymentDetails): Promise<LnPaymentDetails> => {
  const response = await fetch('https://api.breez.technology/v1/payments/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payment),
  });
  const data = await response.json();
  return data.payment;
};