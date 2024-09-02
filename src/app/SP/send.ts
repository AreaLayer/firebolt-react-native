import { UTXO, SilentPaymentGroup, TaggedHash } from 'SilentPayments';

export { UTXO, SilentPaymentGroup, TaggedHash} from '/app/SilentPayments';

export const UTXOObj = {
  UTXO,
  SilentPaymentGroup,
  TaggedHash,
};

export const SilentPaymentGroupObj = {
  UTXO,
  SilentPaymentGroup,
  TaggedHash,
};

export const Bech32m = {
  Bech32m: require('bech32m'),
};
export default UTXOObj;



