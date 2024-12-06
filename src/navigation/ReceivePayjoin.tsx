import React, { useState } from 'react';

const ReceivePayJoin: React.FC = () => {
  const [bitcoinAddress] = useState('bc1q1234...');
  const [expectedAmount, setExpectedAmount] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleCopyDetails = () => {
    // Copy the Bitcoin address and optional PayJoin details
    navigator.clipboard.writeText(bitcoinAddress);
    console.log('Details copied!');
  };

  return (
    <div className="receive-payjoin">
      <h2>Receive PayJoin Payment</h2>

      <label>
        Your Bitcoin Address:
        <div className="bitcoin-address">
          <input type="text" value={bitcoinAddress} readOnly />
          <button onClick={() => navigator.clipboard.writeText(bitcoinAddress)}>Copy</button>
        </div>
      </label>

      <label>
        Expected Amount (Optional):
        <input
          type="text"
          value={expectedAmount}
          placeholder="0.0000 BTC"
          onChange={(e) => setExpectedAmount(e.target.value)}
        />
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
              Offer PayJoin Inputs:
              <select>
                {/* Options to select UTXOs */}
                <option value="utxo1">UTXO 1</option>
                <option value="utxo2">UTXO 2</option>
              </select>
            </label>
          </div>
        )}
      </div>

      <button onClick={handleCopyDetails}>Copy Payment Details</button>
    </div>
  );
};

export default ReceivePayJoin;
