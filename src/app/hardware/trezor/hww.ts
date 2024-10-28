import { GetAddress } from "@trezor/connect";

export interface GetAddress {
  path: string;
  showonTrezor: boolean;
  chunkify: boolean;
  useEventListener: boolean;
  address: string;
}

const GetAddress = {
  path: "m/44'/1'/0'/0/0",
  showonTrezor: true,
  chunkify: false,
  useEventListener: false,
  address: "",
};

export interface Hww {
  getAddress(params: GetAddress): Promise<any>;
}

