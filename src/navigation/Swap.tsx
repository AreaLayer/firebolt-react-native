import React, { useState } from 'react';
import Swap from '../app/swap'; // Ensure this component is implemented and exported correctly.

const SwapNavigation: React.FC = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<string>('mainchain');
  const [swapAmount, setSwapAmount] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleNetworkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNetwork(event.target.value);
  };

  const handleSwap = () => {
    if (!swapAmount) {
      setStatus('Please enter an amount to swap.');
      return;
    }

    // Logic to initiate the swap goes here
    // Example: Swap.initiateSwap(selectedNetwork, swapAmount)

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
