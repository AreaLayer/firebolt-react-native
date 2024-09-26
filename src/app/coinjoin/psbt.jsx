const { Bip371} = require('bitcoinjs-lib');

class TapscriptFinalizer {  constructor(psbt, tapscript) {
        this.psbt = psbt;
        this.tapscript = tapscript;
    }
}

TapscriptFinalizer.prototype.finalize = function() {    const psbt = this.psbt;
    const tapscript = this.tapscript;
    const tapscript_finalizer = new Bip371.TapscriptFinalizer(psbt, tapscript);
    const final_psbt = tapscript_finalizer.finalize();
    return final_psbt;

}
