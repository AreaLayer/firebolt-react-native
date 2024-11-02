// Import PayjoinURL from the 'payjoin-react-native' package
import { PayjoinURL } from 'payjoin-react-native';

export const PayJoin = (url: string) => {
  // Create a PayjoinURL instance
  const payjoinURL = new PayjoinURL(url);
}
// Create a PSBT instance from the PayjoinURL instance
export const psbt = payjoinURL.psbt;

// Export PayJoin and PayjoinURL
export { PayjoinURL };



