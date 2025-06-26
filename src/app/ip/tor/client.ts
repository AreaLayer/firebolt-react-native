import { RnTor } from 'react-native-nitro-tor';
  export interface RnTor {
    initTorService(config: {
      socks_port: number
      data_dir: string
      timeout_ms: number
    }): Promise<boolean>
    
    createHiddenService(config: {
      port: number
      target_port: number
    }): Promise<{
      is_success: boolean
      onion_address: string
    }>
    
    getServiceStatus(): Promise<number>
    
    shutdownService(): Promise<boolean>
}
// Initialize Tor service
export const initTor = async () => {
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
export const createService = async () => {
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
export const checkStatus = async () => {
  const status = await RnTor.getServiceStatus();
  console.log(`Current Tor service status: ${status}`);
};

// Shutdown Tor service
export const shutdown = async () => {
  const result = await RnTor.shutdownService();
  console.log(`Tor shutdown ${result ? 'successful' : 'failed'}`);
};