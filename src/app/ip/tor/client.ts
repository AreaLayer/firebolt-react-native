import { RnTor } from 'react-native-nitro-tor';

// Initialize Tor service
const initTor = async () => {
  const initialized = await RnTor.initTorService({
    socks_port: 9050,
    data_dir: '/path/to/tor/data',
    timeout_ms: 60000,
  });

  if (initialized) {
    console.log('Tor service initialized successfully');
    return true;
  }
  return false;
};

// Create a hidden service
const createService = async () => {
  const serviceResult = await RnTor.createHiddenService({
    port: 9055,
    target_port: 9056,
    // Optionally provide key_data for persistent services
  });

  if (serviceResult.is_success) {
    console.log(`Created hidden service at: ${serviceResult.onion_address}`);
  }
};

// Get the current status of the Tor service.
// 0: Tor is in the process of starting.
// 1: Tor is running.
// 2: Stopped/Not running/error.

// Check service status
const checkStatus = async () => {
  const status = await RnTor.getServiceStatus();
  console.log(`Current Tor service status: ${status}`);
};

// Shutdown Tor service
const shutdown = async () => {
  const result = await RnTor.shutdownService();
  console.log(`Tor shutdown ${result ? 'successful' : 'failed'}`);
};