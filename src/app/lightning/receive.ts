import {Payment} from '@react-native-breez-sdk/NativeModules'
import {Receive} from '@react-native-breez-sdk/NativeModules'

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

    // getAddress: async () => {
    //     return await Receive.getAddress()
    // },
    // getBalance: async () => {
    


    
}
