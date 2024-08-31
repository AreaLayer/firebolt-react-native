import { LightningInvoice } from '@/types/lightning'

export class Invoice {
    id: string;
    amount: number;
    description: string;
    preimage: string;
    htlc:  string;
    status: string;
    paid: boolean;
}
export interface LightningInvoiceState {
    invoices: LightningInvoice[]
}

export const state = (): LightningInvoiceState => ({
    invoices: []
})

export const mutations = {
    setInvoices(state: LightningInvoiceState, invoices: LightningInvoice[]) {
        state.invoices = invoices
    }
}

export const actions = {
    async fetchInvoices({ commit }: any, { pubkey }: { pubkey: string }) {
        const invoices = await this.$axios.$get(`/api/lightning/invoices/${pubkey}`)
        commit('setInvoices', invoices)
    }
}
