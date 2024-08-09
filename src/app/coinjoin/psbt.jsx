const { Bip371, Psbtutils, Psbt} = require('bitcoinjs-lib');

const TapscriptFinalizer {
  constructor(psbt, tapscript) {
        this.psbt = psbt;
        this.tapscript = tapscript;
    }
}

const TapscriptFinalizer.prototype.finalize = function() {
    const psbt = this.psbt;
    const tapscript = this.tapscript;
    const tapscript_finalizer = new Bip371.TapscriptFinalizer(psbt, tapscript);
    const final_psbt = tapscript_finalizer.finalize();
    return final_psbt;

const Psbt = require('bitcoinjs-lib').Psbt;

module.exports = TapscriptFinalizer;