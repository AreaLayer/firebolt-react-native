// usage.ts
import client from './client';

async function main() {
  try {
    // Initialize VPN with configuration file
    const configPath = '/path/to/wireguard.conf';
    const initialized = await client.initVPN(configPath);
    console.log('VPN Initialized:', initialized);

    // Check VPN status
    const status = await client.checkStatus();
    console.log('VPN Status:', status);

    // Shutdown VPN
    const shutdownSuccess = await client.shutdown();
    console.log('VPN Shutdown:', shutdownSuccess);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();