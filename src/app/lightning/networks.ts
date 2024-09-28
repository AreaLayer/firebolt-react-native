import { networks } from 'bitcoinjs-lib';
export { networks };

export class Networks {
    mainnet: bitcoin.networks.bitcoin;    
    constructor(mainnet: Mainnet, testnet: Testnet, signet: Signet) {
        this.mainnet = mainnet;
        this.testnet = testnet;
        this.signet = signet;
    }
}
