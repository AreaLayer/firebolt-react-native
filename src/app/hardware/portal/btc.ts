import { PSBT } from '@gihtub:portal-software/libportal-react-native'
export class Btc {
  static async getBtcAddress(psbt: PSBT): Promise<string> {
    return 'getBtcAddress';
  }
}


export const psbt = new PSBT();

