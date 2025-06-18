import React, { useState } from 'react';
import { VPNClient } from './client';

const vpnClient = new VPNClient();

const VpnUI: React.FC = () => {
  const [status, setStatus] = useState<'disconnected' | 'connected' | 'connecting'>('disconnected');
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    setStatus('connecting');
    setError(null);
    try {
      await vpnClient.connect();
      setStatus('connected');
    } catch (err) {
      setStatus('disconnected');
      setError('Failed to connect');
    }
  };

  const handleDisconnect = async () => {
    setError(null);
    try {
      await vpnClient.disconnect();
      setStatus('disconnected');
    } catch (err) {
      setError('Failed to disconnect');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white border">
      <h2 className="text-2xl font-semibold mb-4 text-center">VPN Client</h2>

      <div className="mb-4 text-center">
        <span className={`font-bold ${status === 'connected' ? 'text-green-600' : status === 'connecting' ? 'text-yellow-600' : 'text-red-600'}`}>
          Status: {status}
        </span>
      </div>

      {error && <p className="text-red-500 mb-2 text-center">{error}</p>}

      <div className="flex justify-center gap-4">
        <button
          onClick={handleConnect}
          disabled={status === 'connected' || status === 'connecting'}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Connect
        </button>

        <button
          onClick={handleDisconnect}
          disabled={status === 'disconnected' || status === 'connecting'}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};

export default VpnUI;

