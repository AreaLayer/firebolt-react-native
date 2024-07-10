import React, { useState } from 'react';
import axios from 'axios';

const ReceivePayment: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [feeOption, setFeeOption] = useState('low');
  const [invoice, setInvoice] = useState('');

  const handleGenerateInvoice = async () => {
    try {
      const response = await axios.post('/api/generate-invoice', { amount, feeOption });
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
      <div>
        <label>
          <input
            type="radio"
            value="low"
            checked={feeOption === 'low'}
            onChange={() => setFeeOption('low')}
          />
          Low Fee
        </label>
        <label>
          <input
            type="radio"
            value="medium"
            checked={feeOption === 'medium'}
            onChange={() => setFeeOption('medium')}
          />
          Medium Fee
        </label>
        <label>
          <input
            type="radio"
            value="fast"
            checked={feeOption === 'fast'}
            onChange={() => setFeeOption('fast')}
          />
          Fast Fee
        </label>
      </div>
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
