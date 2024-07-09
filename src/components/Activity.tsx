import React from 'react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  status: string;
}

interface ActivityProps {
  transactions: Transaction[];
}

const Activity: React.FC<ActivityProps> = ({ transactions }) => (
  <div className="activity">
    <h2>Activity</h2>
    <ul>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          <span>{transaction.description}</span>
          <span>{transaction.amount} sats</span>
          <span>{transaction.date}</span>
          <span>{transaction.status}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Activity;
