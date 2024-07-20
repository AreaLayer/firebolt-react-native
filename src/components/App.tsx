import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Main from './components/Main';
import React, { useState } from 'react';
import Balance from './components/Balance';
import Activity from './components/Activity';
import SendPayment from './components/SendPayment';
import ReceivePayment from './components/ReceivePayment';
import Settings from './components/Settings';
import BitcoinPrice from './BitcoinPrice';
import PriceTrendGraph from './PriceTrendGraph';


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <SendPayments />
    </div>
  );
}

export default App;

const App: React.FC = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Pending payment', amount: 21000, date: 'Today', status: 'Pending' },
    { id: 2, description: 'Lightning fun games', amount: -1000, date: 'September 21, 2021', status: 'Completed' },
    { id: 3, description: 'Lightning fun games', amount: -2, date: 'April 4, 2021', status: 'Completed' },
  ]);

  return (
    <div className="App">
      <Balance balance={25000} fiatEquivalent={11.48} />
      <Activity transactions={transactions} />
      <SendPayment />
      <ReceivePayment />
      <Settings />
      <BitcoinPrice />
      <SendPayment />
      <ReceivePayment />
      <NostrKeys />
      <PriceTrendGraph />
    </div>
  );
}

export default App;
