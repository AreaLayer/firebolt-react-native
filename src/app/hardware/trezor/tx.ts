import GetAddressParams from '@trezor/connect'// eslint-disable-next-line @typescript-eslint/no-unused-vars

export interface GetAddressParams {
  path: string;
  showonTrezor: boolean;
  chunkify: boolean;
  useEventListener: boolean;
  address: string;
}

export const defaultGetAddressParams: GetAddressParams = {
  path: "m/44'/1'/0'/0/0",
  showonTrezor: true,
  chunkify: false,
  useEventListener: false,
  address: "",
};
export interface Hww  {
  getAddress(params: GetAddressParams): Promise<any>;
}
