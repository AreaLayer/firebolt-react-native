import {Payment, TXID, UTXO} from 'react-native-breez';
import { Coinjoin } from './Coinjoin';

const coinjoin = new Coinjoin();

export { coinjoin };

const Payment = {
  Payment,
  TXID,
  UTXO
};

export default Payment;
