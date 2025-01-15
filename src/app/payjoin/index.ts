import { PayjoinURL } from 'payjoin-react-native';
import { UTXO } from 'silent-payments';

export const PayJoin = (url: string) => {
  // Create a PayjoinURL instance
  const payjoinURL = new PayjoinURL(url);
  return payjoinURL;
};

// Function to create a PSBT instance
export const createPSBT = (url: string) => {
  const payjoinURL = new PayjoinURL(url);
  return payjoinURL.psbt; // Assuming `psbt` is a property of PayjoinURL
};

// Send the PSBT to the payjoin server
export const sendPSBT = async (psbt: string): Promise<Response> => {
  try {
    const response = await fetch('https://payjoin.example.com/payjoin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ psbt }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Failed to send PSBT:', error);
    throw error;
  }
};

// Example usage of UTXO
const utxo: UTXO = {
  txid: 'txid',
  vout: 0,
  scriptPubKey: 'scriptPubKey',
  amount: 1000000
};
// Log the UTXO for demonstration purposes
console.log(utxo);

// Export the PayjoinURL for external use
export { PayjoinURL };
