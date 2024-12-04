
import {Fees} from 'bitcoinjs-lib';
import {FeeEstimator} from 'bitcoinjs-lib';

const Fees = {
FeesMine: {
    low: 10000,
    medium: 20000,
    high: 30000,
}
}

const FeeEstimator = {
    getFee: function(feeRate) {
        return feeRate * 1000;
    }
}
export { Fees, FeeEstimator };

export default FeeEstimator;