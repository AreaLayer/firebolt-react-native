import React from 'react';

interface BalanceProps {
  balance: number;
  fiatEquivalent: number;
  satsEquivalent: number;
}

const Balance: React.FC<BalanceProps> = ({ balance, fiatEquivalent , satsEquivalent}) => (
  <div className="balance">
    <h2>Your Balance</h2>
    <p>{balance} sats</p>
    <p>{fiatEquivalent} €</p>
    <p>{satsEquivalent} sats</p>
  </div>
);

export default Balance;
