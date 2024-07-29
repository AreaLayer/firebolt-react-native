import { Invoice } from "../models/Invoice";
import React from "react";

export interface InvoiceProps {
    invoice: Invoice;
}

export const InvoiceComponent: React.FC<InvoiceProps> = ({ invoice }) => {
    return (
        <div>
            InvoiceComponent: {invoice.id}
        </div>
    );
};