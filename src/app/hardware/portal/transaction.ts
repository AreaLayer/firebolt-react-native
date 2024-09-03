import { ITransaction } from './ITransaction';

export class Transaction implements ITransaction {
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
}