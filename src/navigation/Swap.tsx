import React, { useState } from 'react';

const SwapNavigation = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('mainchain');
  const [swapAmount, setSwapAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleNetworkChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedNetwork(event.target.value);
  };

  const handleSwap = () => {
    if (!swapAmount) {
      setStatus('Please enter an amount to swap.');
      return;
    }

    // Logic to initiate the swap goes here
    // Example: initiateSwap(selectedNetwork, swapAmount)

    setStatus(`Swapped ${swapAmount} on ${selectedNetwork}`);
  };

  return (
    <div>
      <h1>Swap Between Networks</h1>
      <div>
        <label>
          Select Network:
          <select value={selectedNetwork} onChange={handleNetworkChange}>
            <option value="mainchain">Mainchain</option>
            <option value="liquid">Liquid</option>
          </select>
        </label>
      </div>
      <div>
        <input
          type="number"
          placeholder="Amount to Swap"
          value={swapAmount}
          onChange={(e) => setSwapAmount(e.target.value)}
        />
        <button onClick={handleSwap}>Swap</button>
      </div>
      {status && <div>Status: {status}</div>}
    </div>
  );
};

export default SwapNavigation;
