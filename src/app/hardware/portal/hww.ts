import { multiply, NFC, Poll, Network, Bitcoin as BitcoinType, GetStatus as GetStatusType } from 'libportal-react-native';
import { GetStatus as GetStatusType } from '../types'; // Assuming GetStatus is a type or object from the 'types' module
export class Hww {
  static multiply(a: number, b: number): Promise<number> {
    return multiply(a, b);
  }
}

// Shared structure for consistency
const sharedStructure = {
  poll: Poll,
  nfc: NFC,
};

export const poll = { ...sharedStructure };

export const newTag = { ...sharedStructure };

export const IncomingData = { ...sharedStructure };

export const GetStatus = {
  getStatus: GetStatusType, // Using a type-safe alias
  nfc: NFC,
};

export const NetworkConfig = {
  Bitcoin: BitcoinType, // Explicitly distinguish imported Bitcoin
  Signet: SignetType,   // Explicitly distinguish imported Signet
};

export const GenerateMnemonic = { ...sharedStructure };

export const Unlock = { ...sharedStructure };

export const DisplayAddress = { ...sharedStructure };

export const signPSBT = { ...sharedStructure };

export const PublicDescriptor = { ...sharedStructure };

