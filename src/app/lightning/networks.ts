import { networks } from 'bitcoinjs-lib'; 
export { networks };

// Define types/interfaces for each network type
interface Mainnet {
  messagePrefix: string;
  bech32: string;
  bip32: {
    public: number;
    private: number;
  };
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Testnet {
  messagePrefix: string;
  bech32: string;
  bip32: {
    public: number;
    private: number;
  };
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Signet {
  messagePrefix: string;
  bech32: string;
  bip32: {
    public: number;
    private: number;
  };
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

// Class to handle network configurations
export class Networks {
  mainnet: Mainnet;
  testnet: Testnet;
  signet: Signet;

  constructor(mainnet: Mainnet, testnet: Testnet, signet: Signet) {
    this.mainnet = mainnet;
    this.testnet = testnet;
    this.signet = signet;
  }
}
