import { Transaction } from './Transaction';

export class Transaction implements Transaction {
    id: number;
    name: string;
    description: string;
    amount: number;
    date: Date;
    type: string;
    category: string;
    account: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;

    // Constructor to initialize the transaction properties
    constructor(
        id: number,
        name: string,
        description: string,
        amount: number,
        date: Date,
        type: string,
        category: string,
        account: string,
        status: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.date = date;
        this.type = type;
        this.category = category;
        this.account = account;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
