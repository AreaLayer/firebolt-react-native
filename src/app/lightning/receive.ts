import {Payment, Receive, GetInvoice, PayInvoice, ReceiveINvoice, PaymentRequest} from '@react-native-breez-sdk/NativeModules'

export const payment = {
    getInvoice: async (amount: number, memo: string) => {
        return await Payment.getInvoice(amount, memo)
    },
    payInvoice: async (invoice: string) => {
        return await Payment.payInvoice(invoice)
    }
    receiveInvoice: async (invoice: string) => {
        return await Receive.receiveInvoice(invoice)
    },

    getPaymentRequest: async (amount: number, memo: string) => {
        return await Payment.getPaymentRequest(amount, memo)
    }

    payPaymentRequest: async (paymentRequest: string) => {
        return await Payment.payPaymentRequest(paymentRequest)
    }


    
}
