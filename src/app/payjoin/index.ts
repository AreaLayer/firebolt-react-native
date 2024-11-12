// Import PayjoinURL from the 'payjoin-react-native' package
import { PayjoinURL } from 'payjoin-react-native';

export const PayJoin = (url: string) => {
  // Create a PayjoinURL instance
  const payjoinURL = new PayjoinURL(url);
  return payjoinURL;
}
// Create a PSBT instance from the PayjoinURL instance
export const psbt = PayjoinURL.psbt;

// Send the PSBT to the payjoin server
export const sendPSBT = async (psbt: string) => {
  // Send the PSBT to the payjoin server
  const response = await fetch('https://payjoin.example.com/payjoin', {
    method: 'POST',
    headers
  });
}

// Export PayJoin and PayjoinURL
export { PayjoinURL };
