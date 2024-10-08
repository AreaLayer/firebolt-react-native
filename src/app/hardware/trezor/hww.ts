import TrezorConnect from '@trezor/connect';
export class Hww {
  public static async getAddress(path: string) {
    return await TrezorConnect.SpendTaproot.getAddress({
      path: path,
      showOnTrezor: true,
    });
  }
}

export const getAddress = Hww.getAddress;

export default Hww;