import { Address } from './address';

export interface Address {
  address: string;
  type: P2TR;
  scriptPubKey: string;
  scriptSig: string;
}
