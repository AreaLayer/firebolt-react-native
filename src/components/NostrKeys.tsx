import React, { useState } from 'react';

const KeyManager: React.FC = () => {
  const [npubKey, setNpubKey] = useState('');
  const [nsecKey, setNsecKey] = useState('');

  const handleSaveKeys = () => {
    // Save the keys logic
    console.log('Npub Key:', npubKey);
    console.log('Nsec Key:', nsecKey);
  };

  const handleClearKeys = () => {
    setNpubKey('');
    setNsecKey('');
  };

  return (
    <div className="key-manager">
      <h2>Manage Keys</h2>
      <input
        type="text"
        placeholder="npub Key"
        value={npubKey}
        onChange={e => setNpubKey(e.target.value)}
      />
      <input
        type="text"
        placeholder="nsec Key"
        value={nsecKey}
        onChange={e => setNsecKey(e.target.value)}
      />
      <button onClick={handleSaveKeys}>Save Keys</button>
      <button onClick={handleClearKeys}>Clear Keys</button>
    </div>
  );
};

export default KeyManager;
