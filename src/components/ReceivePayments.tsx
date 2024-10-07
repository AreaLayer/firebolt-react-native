import React, { useState } from 'react';
import { Invoice } from '../app/lightning/invoice';
import axios from 'axios';

const ReceivePayment: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [invoice, setInvoice] = useState('');

  const handleGenerateInvoice = async () => {
    try {
      const response = await axios.post('/api/generate-invoice', { amount });
      const invoice = response.data.invoice;
      setInvoice(response.data.invoice);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="receive-payment">
      <h2>Receive Payment</h2>
      <input
        type="number"
        placeholder="Amount (sats)"
        value={amount}
        onChange={e => setAmount(parseInt(e.target.value))}
      />
      <button onClick={handleGenerateInvoice}>Generate Invoice</button>
      {invoice && (
        <div>
          <p>Invoice:</p>
          <textarea readOnly value={invoice} />
          <button onClick={() => navigator.clipboard.writeText(invoice)}>Copy Invoice</button>
        </div>
      )}
    </div>
  );
};

export default ReceivePayment;
