import React, { useState } from 'react';
import axios from 'axios';

const SendPayment: React.FC = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [useLightning, setUseLightning] = useState(false);
  const [useCoinjoin, setUseCoinjoin] = useState(false);
  const [useSilenPayments, setUseSilentPayments] = useState(false);

  const handleSendPayment = async () => {
    try {
      const response = await axios.post('/api/send-payment', {
        address,
        amount,
        useLightning,
        useCoinjoin,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="send-payment">
      <h2>Send Payment</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (sats)"
        value={amount}
        onChange={e => setAmount(parseInt(e.target.value))}
      />
      <div>
        <input
          type="checkbox"
          checked={useLightning}
          onChange={e => setUseLightning(e.target.checked)}
        />
        <label>Use Lightning Network</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={useCoinjoin}
          onChange={e => setUseCoinjoin(e.target.checked)}
        />
        <label>Enable Coinjoin (On-chain only)</label>
      </div>
      <button onClick={handleSendPayment}>Send</button>
    </div>
  );
};

export default SendPayment;
