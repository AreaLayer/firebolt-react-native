import { multiply, NFC } from 'libportal-react-native';

export class Hww {
  static multiply(a: number, b: number): Promise<number> {
    return multiply(a, b);
  }
}

export default Hww;


export class NFC {
  static getNFC(): Promise<string> {
    return NFC.getNFC();
  }
}

export default NFC;

const hww = new Hww();

const NFC = new NFC();


