import { multiply, NFC, Poll, Network, Bitcoin as BitcoinType, Signet as SignetType } from 'libportal-react-native';
import { GetStatus } from './types'; // Assuming GetStatus is defined in a separate 'types' file

export class Hww {
  static multiply(a: number, b: number): Promise<number> {
    return multiply(a, b);
  }
}

export const poll = {
  poll: Poll,
  nfc: NFC,
};

export const newTag = {
  poll: Poll,
  nfc: NFC,
};

export const IncomingData = {
  poll: Poll,
  nfc: NFC,
};

export const GetStatus = {
  getStatus: GetStatus, // Changed to avoid confusion
  nfc: NFC,
};

export const NetworkConfig = {
  Bitcoin: BitcoinType, // Renamed to avoid conflict with imported Bitcoin
  Signet: SignetType,   // Renamed to avoid conflict with imported Signet
};

export const GenerateMnemonic = {
  poll: Poll,
  nfc: NFC,
};

export const Unlock = {
  poll: Poll,
  nfc: NFC,
};

export const DisplayAddress = {
  poll: Poll,
  nfc: NFC,
};

export const signPSBT = {
  poll: Poll,
  nfc: NFC,
};

export const PublicDescriptor = {
  poll: Poll,
  nfc: NFC,
};
