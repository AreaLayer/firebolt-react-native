import { Address } from './address';

export interface Address {
  address: string;
  type: any;
  scriptPubKey: string;
  scriptSig: string;
}
