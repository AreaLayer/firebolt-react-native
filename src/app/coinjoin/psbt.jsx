const { bip371, psbtutils} = require('bitcoinjs-lib');

const TapscriptFinalizer {
  constructor(psbt, tapscript) {
        this.psbt = psbt;
        this.tapscript = tapscript;
    }
}

module.exports = TapscriptFinalizer;