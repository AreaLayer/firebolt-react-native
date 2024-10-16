import React, { useState } from 'react';

const SendPayJoin: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [fee, setFee] = useState('medium');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSendPayment = () => {
    // Handle send logic here
    console.log('Sending Payment...');
  };

  return (
    <div className="send-payjoin">
      <h2>Send PayJoin Payment</h2>

      <label>
        Amount to Send (BTC):
        <input
          type="text"
          value={amount}
          placeholder="0.0000 BTC"
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <label>
        Recipient Address:
        <input
          type="text"
          value={address}
          placeholder="bc1q... (Bitcoin address)"
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>

      <label>
        Transaction Fee:
        <select value={fee} onChange={(e) => setFee(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="custom">Custom</option>
        </select>
      </label>

      <div>
        <label>
          <input
            type="checkbox"
            checked={showAdvanced}
            onChange={() => setShowAdvanced(!showAdvanced)}
          />
          Show Advanced Options
        </label>
        {showAdvanced && (
          <div className="advanced-options">
            <label>
              Include PayJoin Inputs:
              <select>
                {/* Options to select UTXOs */}
                <option value="utxo1">UTXO 1</option>
                <option value="utxo2">UTXO 2</option>
              </select>
            </label>
          </div>
        )}
      </div>

      <button onClick={handleSendPayment}>Review Payment</button>
    </div>
  );
};

export default SendPayJoin;
