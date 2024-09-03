import { PSBT } from 'bitcoinjs-lib';

export class Btc {
  static async getBtcAddress(psbt: PSBT): Promise<string> {
    return 'getBtcAddress';
  }
}


export const psbt = new PSBT();

