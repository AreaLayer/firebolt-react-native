// Import PayjoinURL from the 'payjoin-react-native' package
import { PayjoinURL } from 'payjoin-react-native';

export const PayJoin = (url: string) => {
  // Create a PayjoinURL instance
  const payjoinURL = new PayjoinURL(url);
}


// Export PayJoin and PayjoinURL
export { PayjoinURL };



