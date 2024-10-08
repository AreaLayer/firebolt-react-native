import { GetAddress } from "@trezor/connect";

export interface GetAddress {
  path: string;
  showonTrezor: boolean;
  chunkify: boolean;
  useEventListener: boolean;
  address: string;
}

export interface Hww {
  getAddress(params: GetAddress): Promise<any>;
}

