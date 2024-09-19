import {Payment, Receive, BreezEvent} from '@breeztech/react-native-breez-sdk';

export const payment = {
    getInvoice: async (amount: number, memo: string) => {
        return await Payment.getInvoice(amount, memo)
    },
    payInvoice: async (invoice: string) => {
        return await Payment.payInvoice(invoice)
    }
    
}

export const Receive = {
    getInvoice: async (amount: number, memo: string) => {
        return await Receive.getInvoice(amount, memo)
    }
}

export const getBalance = async () => {
    return await Payment.getBalance()
}

export const getInfo = async () => {
    return await Payment.getInfo()
}

export const paymentStatus = async (paymentId: string) => {
    return await Payment.paymentStatus(paymentId)
}

export const BreezEvent = {
    onEvent: (callback: (event: BreezEvent) => void) => {
        return BreezEvent.onEvent(callback)
    }
}