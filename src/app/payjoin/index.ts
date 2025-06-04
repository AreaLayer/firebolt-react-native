import { PayjoinURL } from 'payjoin-react-native';import { UTXO } from 'silent-payments';

// Interface definitions for better type safety
interface PSBTResponse extends Response {
  json(): Promise<any>;
}

interface SendPSBTConfig {
  endpoint?: string;
  timeout?: number;
  [key: string]: any;
}

// Payjoin URL creation function with input validation
export const createPayjoin = (url: string): PayjoinURL => {
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL provided');
  }
  const payjoinURL = new PayjoinURL(url);
  return payjoinURL;
};

// Function to create a PSBT instance with input validation
export const createPSBT = (url: string): string => {
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL provided');
  }
  return PayjoinURL.psbt;
};

export const ValidatePayjoinPsbt = (): string => {
  const originalOutput = PayjoinURL.psbt;
  return PayjoinURL.psbt;
};
// Function to send PSBT to the payjoin server with config options
export const sendPSBT = async (
  psbt: string,
  config: SendPSBTConfig = {}
): Promise<PSBTResponse> => {
  const { 
    endpoint = 'https://payjoin.example.com/payjoin', 
    timeout = 30000 
  } = config;

  if (!psbt || typeof psbt !== 'string') {
    throw new Error('Invalid PSBT provided');
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ psbt }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error ${response.status}: ${errorText}`);
    }

    return response as PSBTResponse;
  } catch (error) {
    console.error('Failed to send PSBT:', error);
    throw error instanceof Error ? error : new Error('Unknown error occurred');
  }
};

// UTXO constant with proper typing
export const demoUTXO: UTXO = {
  txid: 'txid',
  vout: 0,
  amount: 10000,
};
// Utility function to log UTXO
export const logUTXO = (utxo: UTXO): void => {
  if (!utxo || typeof utxo !== 'object') {
    throw new Error('Invalid UTXO provided');
  }
  console.log('UTXO Details:', utxo);
};

// Example usage with error handling
try {
  logUTXO(demoUTXO);
} catch (error) {
  console.error('Error logging UTXO:', error);
}

// Export PayjoinURL class
export { PayjoinURL };