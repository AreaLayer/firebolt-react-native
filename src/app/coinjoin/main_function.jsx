const {Psbt, Transaction, p2wsh_multisign, P2TR, } = require('bitcoinjs-lib');
const signet = bitcoin.networks.signet;
const { Round1, Round2, Round3, Round4, Round5 } = require('./wallets.json');
const { Input, Output } = require('./wallets.json');
const { stats_tx_fee } = require('./stats.json');
const { CoinJoinRound } = require('./coinjoin_round.json');
const { BitcoinConverter } = require('./bitcoin_converter.json');

// Connect to the Bitcoin signet network
const provider = 'https://signet.mempool.space/api';
const explorer = 'https://mempool.space/signet/tx';

// Stats fee
const statsTxFee = 10000;

let converter = new BitcoinConverter();

let satoshis = converter.btcToSatoshis(0.001);
console.log(satoshis); // 100000

let btcAmount = converter.satoshisToBtc(100000);
console.log(btcAmount); // 0.001

class CoinJoinRound {
  constructor(inputs, outputs) {
    this.inputs = inputs;
    this.outputs = outputs;
  }

  rbf(transaction, feeRate) {
    // Modify the transaction to increase fees
    const currentFee = transaction.getFee();
    const newFee = currentFee * feeRate;
    transaction.setFee(newFee);
    // Broadcast the modified transaction
    transaction.broadcast();
  }
}

class Transaction {
  constructor(txid, utxo_in, locktime, keyset) {
    this.txid = txid;
    this.utxo_in = utxo_in;
    this.locktime = locktime;
    this.keyset = keyset;
  }
}

class RawTransaction {
  constructor(txid, utxo_in) {
    this.txid = txid;
    this.utxo_in = utxo_in;
  }
}

function createTransaction(t) {
  let utxo_in = `${t.txid}:${t.n}`;
  let transaction = new Transaction(t.txid, utxo_in);
  transactions.push(transaction);
}

class CXJT {
  constructor(tx, wallet, n_counterparties, n, locktime = null, keyset = null) {
    if (!(wallet instanceof Wallet)) {
      throw new Error("Wallet must be an instance of Wallet");
    }

    if (!(tx instanceof Transaction)) {
      throw new Error("Transaction must be an instance of Transaction");
    }

    if (![n_counterparties, n].every(x => Number.isInteger(x))) {
      throw new Error("n_counterparties and n must be integers");
    }

    this.tx = tx;
    this.wallet = wallet;
    this.n_counterparties = n_counterparties;
    this.n = n;
    this.locktime = locktime;
    this.keyset = keyset;
    this.ins = [];
    this.outs = [];
    this.base_form = null;
    this.signing_redeem_scripts = [];
    this.signatures = [];
    this.completed = [];
  }

  buildInsFromTemplate(template) {
    // Implement logic to build inputs from a template
  }

  buildOutsFromTemplate(template) {
    // Implement logic to build outputs from a template
  }

  applyKey(insouts, idx, cpr, key) {
    this.keys[insouts][idx][cpr] = key;

    if (insouts === "ins") {
      const tp = this.t.ins[idx].spk_type;

      if (tp === "p2tr-p2wsh") {
        this.signing_redeem_scripts[idx] = bitcoin.pubkey_to_p2tr_p2wsh_script(key);
      } else if (tp === "NN") {
        if (Object.keys(this.keys["ins"][idx]).length === this.n_counterparties) {
          this.signing_redeem_scripts[idx] = NN_script_from_pubkeys(
            Object.values(this.keys["ins"][idx])
          );
        }
      }
    }
  }

  signatureForm(index) {
    if (!this.signing_redeem_scripts[index]) {
      throw new Error("Signing redeem script not available");
    }

    return bitcoin.taproot_signature_form(
      bitcoin.deserialize(this.base_form),
      index,
      this.signing_redeem_scripts[index],
      this.ins[index][1]
    );
  }

  signatureIndex(in_index) {
    const pub = this.keys["ins"][in_index][this.n];
    const addr = this.wallet.pubkey_to_address(pub);
    const privkey = this.wallet.get_key_from_addr(addr);

    const tp = this.template.ins[in_index].spk_type;

    if (tp === "p2tr-p2wsh") {
      const txwithsig = bitcoin.deserialize(
        this.wallet.sign(this.base_form, in_index, privkey, this.ins[in_index][1])
      );

      const sig = txwithsig.ins[in_index].txinwitness[0];

      const scriptCode =
        "76a914" + bitcoin.crypto.hash160(Buffer.from(pub, 'hex')).toString('hex') + "88ac";

      if (!bitcoin.verify_tx_input(
        this.base_form,
        in_index,
        scriptCode,
        sig,
        pub,
        'deadbeef',
        this.ins[in_index][1]
      )) {
        throw new Error("Transaction input verification failed");
      }

      this.signatures[in_index] = [sig];
      this.completed[in_index] = true;
    } else if (tp === "NN") {
      if (!this.signatures[in_index]) {
        this.signatures[in_index] = new Array(this.n_counterparties).fill(null);
      }

      const sig = bitcoin.p2wsh_multisign(
        this.base_form,
        in_index,
        this.signing_redeem_scripts[in_index],
        privkey,
        this.ins[in_index][1]
      );

      if (!bitcoin.verify_tx_input(
        this.base_form,
        in_index,
        this.signing_redeem_scripts[in_index],
        sig,
        pub,
        'deadbeef',
        this.ins[in_index][1]
      )) {
        throw new Error("Transaction input verification failed");
      }

      this.signatures[in_index][this.n] = sig;

      if (this.signatures[in_index].every(x => x)) {
        this.completed[in_index] = true;
      }
    }
  }

    const sig = bitcoin.p2wsh_multisign(
        this.base_form,
        in_index,
        this.signing_redeem_scripts[in_index],
        privkey,
        this.ins[in_index][1]
    );

    if (btc.verify_tx_input(
        this.base_form,
        in_index,
        this.signng_redeem_scripts[in_index],
        sig,
        pub,
        'deadbeef',
        this.ins[in_index][1]
    )); {
        throw new Error("Transaction input verification failed");
    }

    // Note that it's OK to use this.n as the explicit list index
    // here, as we always do N of N multisig.
    this.signatures[in_index][this.n] = sig;

    if (this.signatures[in_index].every(x => x)) {
        this.completed[in_index] = true;
    }
}

// In some cases, the sig is used by the caller (to send to counterparty)
return sig;

  class include_signature {
    constructor(self, in_index, cp, sig) {
    }
}
    // For receiving counterparty signatures, either
// on promise inputs or NN multisigs. If valid,
// mark that index as completed if appropriate,
// and return true. If invalid, return false.
include_signature(in_index, cp, sig) {
    const tp = this.template.ins[in_index].spk_type;
    const pub = this.keys["ins"][in_index][cp];

    if (tp === "NN") {
        if (this.signatures[in_index].length === 0) {
            this.signatures[in_index] = new Array(this.n_counterparties).fill(null);
        }

        const sigform = this.signature_form(in_index);

        if (!btc.verify_tx_input(
            this.base_form,
            in_index,
            this.signing_redeem_scripts[in_index],
            sig,
            this.keys["ins"][in_index][cp],
            'deadbeef',
            this.ins[in_index][1]
        )) {
            console.error("Error in include_signature: signature invalid: " + sig);
            return false;
        } else {
            this.signatures[in_index][cp] = sig;

            if (this.signatures[in_index].every(x => x)) {
                this.completed[in_index] = true;
            }

            return true;
        }
    } else if (tp === "p2tr-p2wsh") {
        // Counterparty's promise signature
        // Verification check
        const scriptCode =
            "76a914" + btc.hash160(Buffer.from(pub, 'hex')).toString('hex') + "88ac";

        if (!btc.verify_tx_input(
            this.base_form,
            in_index,
            scriptCode,
            sig,
            pub,
            'deadbeef',
            this.ins[in_index][1]
        )) {
            console.error("Error in include_signature: signature invalid: " + sig);
            return false;
        } else {
            this.signatures[in_index] = [sig];
            this.completed[in_index] = true;
            return true;
        }
    }

    return false;
}
  class fully_signed() {
    if (this.completed.every(x => x === true)) {
    return true;
}
} else {
    return false;
}
class attach_signatures() {
  if (!this.fully_signed()) {
    throw new Error("Transaction is not fully signed");
}

this.fully_signed_tx = JSON.parse(JSON.stringify(this.base_form));

for (let idx = 0; idx < this.ins.length; idx++) {
    const tp = this.template.ins[idx].spk_type;

    if (tp === "NN") {
        this.fully_signed_tx = btc.apply_p2wsh_multisignatures(
            this.fully_signed_tx,
            idx,
            this.signing_redeem_scripts[idx],
            this.signatures[idx]
        );
    } else if (tp === "p2sh-p2wsh") {
        const k = this.keys["ins"][idx][Object.keys(this.keys["ins"][idx])[0]];
        const dtx = btc.deserialize(this.fully_signed_tx);

        dtx["ins"][idx]["script"] = "16" + btc.pubkey_to_p2re_p2wsh_script(k);
        dtx["ins"][idx]["txinwitness"] = [this.signatures[idx][0], k];

        this.fully_signed_tx = btc.serialize(dtx);
    } else {
        throw new Error("Invalid script type: " + tp);
    }
}
class txid() {
  constructor(self) {
  }
   if (!this.fully_signed_tx) {
    throw new Error("Transaction is not fully signed");
}

this.txid = btc.txhash(this.fully_signed_tx);
}
  class push() {
    constructor(self) {
    }
    if (!this.fully_signed()) {
    throw new Error("Transaction is not fully signed");
}

this.attach_signatures();
this.set_txid();

if (!cjxt_single().bc_interface.pushtx(this.fully_signed_tx)) {
    return ["Failed to push transaction, id: " + this.txid, false];
} else {
    return [this.txid, true];
}
  }
toString() {
    // Convenience function for showing tx in the current
    // state in a human-readable form. This is not an object
    // serialization (see serialize).
    const msg = [];
    let tx = this.base_form;

    if (!this.fully_signed_tx) {
        msg.push("Not fully signed");
        msg.push("Signatures: " + JSON.stringify(this.signatures));

        if (this.txid) {
            msg.push("Txid: " + this.txid);
        }
    } else {
        msg.push("Fully signed.");

        if (this.txid) {
            msg.push("Txid: " + this.txid);
        }

        tx = this.fully_signed_tx;
    }

    msg.push(tx);
    const dtx = btc.deserialize(tx);

    return JSON.stringify(dtx, null, 4) + "\n" + msg.join("\n");
}

class Outpoint {
    constructor(n, counterparty, amount = null, txobj = null, txid = null) {
        this.txobj = txobj;
        this.n = n;
        this.txid = txid;
        this.spk_type = (counterparty === -1) ? "NN" : "p2tr-p2wsh";
        this.counterparty = counterparty;
        this.amount = (typeof amount === 'number') ? btc_to_satoshis(amount) : amount;
    }

    toString() {
        return `Outpoint: ${this.n} ${this.counterparty} ${this.spk_type} ${this.amount}`;
    }

    serialize() {
        const serialized = {};
        serialized.n = this.n;
        serialized.counterparty = this.counterparty;
        serialized.amount = this.amount;
        serialized.txobj = this.txobj ? this.txobj.serialize() : null;
        serialized.txid = this.txid;
        serialized.spk_type = this.spk_type;
        return serialized;
    }

    static deserialize(d) {
        return new Outpoint(d.n, d.counterparty, d.amount, d.txobj, d.txid);
    }
}

class TX {
    constructor(outsInfo, ins, preTxBalances, minFee = STATIC_TX_FEE, maxFee = 10 * STATIC_TX_FEE) {
        this.preTxBalances = preTxBalances;
        this.minFee = minFee;
        this.maxFee = maxFee;
        this.ins = ins;
        this.outs = [];
        this.totalPayable = 0;
        this.generateOutpoints(outsInfo);
        this.validateBalance();
        this.calculatePostTxBalance();
    }

    generateOutpoints(outsInfo) {
        const totalInputAmount = this.ins.reduce((sum, input) => sum + input.amount, 0);
        this.totalPayable = totalInputAmount - this.minFee;

        if (outsInfo.every(x => x instanceof Outpoint)) {
            this.outs = outsInfo;
        } else {
            if (!outsInfo.some(x => x[2] === -1)) {
                const ratioTotal = outsInfo.reduce((sum, x) => sum + x[3], 0);
                const amts = outsInfo.map(a => Math.round((a[3] * this.totalPayable) / ratioTotal));
                const amtTweak = this.totalPayable - amts.reduce((sum, x) => sum + x, 0);

                this.outs = outsInfo.map((oi, i) => {
                    const amtPrime = (i === 0) ? amts[i] + amtTweak : amts[i];
                    return new Outpoint(oi[1], oi[2], amtPrime, this);
                });

                return;
            }

            let usedTotal = 0;
            for (const oi of outsInfo) {
                if (oi[2] === -1) {
                    continue;
                }
                this.outs.push(new Outpoint(oi[1], oi[2], oi[3], this));
                usedTotal += oi[3];
            }

            const remainingTotal = this.totalPayable - usedTotal;
            if (outsInfo.some(x => x[2] === -1)) {
                assert(remainingTotal > 0); 
            } else {
                assert(remainingTotal === 0);
            }

            const ratioTotal = outsInfo.filter(x => x[2] === -1).reduce((sum, x) => sum + x[3], 0);
            for (const oi of outsInfo) {
                if (oi[2] !== -1) {
                    continue;
                }
                const amt = Math.round((oi[3] * remainingTotal) / ratioTotal);
                this.outs.push(new Outpoint(oi[1], oi[2], amt, this));
            }
        }
    }

    validateBalance() {
        assert(this.outs.reduce((sum, a) => sum + a.amount, 0) <= this.ins.reduce((sum, a) => sum + a.amount, 0));
        assert(this.outs.every(a => a.amount > 0));
    }

    calculatePostTxBalance() {
        this.postTxBalances = this.preTxBalances.map(pre => pre);

        for (let i = 0; i < this.preTxBalances.length; i++) {
            for (const inp of this.ins) {
                if (inp.counterparty === i) {
                    this.postTxBalances[i] -= inp.amount;
                }
            }

            for (const o of this.outs) {
                const outFrac = o.amount / this.totalPayable;
                const fee = Math.round(outFrac * this.minFee);

                if (o.counterparty === i) {
                    this.postTxBalances[i] += o.amount - fee;
                }
            }
        }
    }

    containsPromise() {
        return this.ins.some(x => x.counterparty !== -1);
    }

    coOwnedOutputs() {
        return this.outs.filter(x => x.counterparty === -1);
    }

    toString() {
        return `Transaction: pre-tx balances: ${this.preTxBalances}\ninputs: ${this.ins}, outputs ${this.outs}\npost-tx balances: ${this.postTxBalances}`;
    }

    serialize() {
        const serialized = {};
        serialized.preTxBalances = this.preTxBalances;
        serialized.minFee = this.minFee;
        serialized.maxFee = this.maxFee;
        serialized.ins = this.ins.map(input => input.serialize());
        serialized.outs = this.outs.map(output => output.serialize());
        serialized.totalPayable = this.totalPayable;
        serialized.postTxBalances = this.postTxBalances;
        return serialized;
    }

    static deserialize(d) {
        const ins = d.ins.map(inputData => Outpoint.deserialize(inputData));
        const outs = d.outs.map(outputData => Outpoint.deserialize(outputData));
        return new TX(d.outsInfo, ins, d.preTxBalances, d.minFee, d.maxFee);
    }
}

class Data {
    constructor(templateDataSet) {
        this.n = templateDataSet.n;
        this.N = templateDataSet.N;
        this.outList = templateDataSet.out_list;
        this.inflows = templateDataSet.inflows;
        this.fundingIns = this.inflows
            .filter(x => x[0] === 0)
            .map(x => new Outpoint(x[4], x[1], x[2], null, x[3]));
    }

    serialize() {
        const serialized = {};
        serialized.n = this.n;
        serialized.N = this.N;
        serialized.outList = this.outList;
        serialized.inflows = this.inflows.map(inflow => inflow.serialize());
        return serialized;
    }

    static deserialize(d) {
        const inflows = d.inflows.map(inflowData => Outpoint.deserialize(inflowData));
        return new Data({
            n: d.n,
            N: d.N,
            out_list: d.outList,
            inflows: inflows
        });
    }
}

class DataSet {
    constructor(templateDataSet) {
        this.n = templateDataSet.n;
        this.N = templateDataSet.N;
        this.outList = templateDataSet.out_list;
        this.inflows = templateDataSet.inflows;
        this.txs = [];

        const fundingIns = this.inflows
            .filter(x => x[0] === 0)
            .map(x => new Outpoint(x[4], x[1], x[2], null, x[3]));

        const fundingTx = new TX(
            this.outList.filter(x => x[0] === 0),
            fundingIns,
            [0, 0]
        );

        this.txs.push(fundingTx);

        for (let i = 1; i < this.N; i++) {
            const ourInflows = this.inflows
                .filter(x => x[0] === i)
                .map(x => new Outpoint(x[4], x[1], x[2], null, x[3]));

            const ourOutputsInfo = this.outList.filter(x => x[0] === i);
            const ourCoOwnedInputs = this.txs[i - 1].outs.filter(x => x.spk_type === "NN");

            const newTx = new TX(
                ourOutputsInfo,
                ourCoOwnedInputs.concat(ourInflows),
                this.txs[i - 1].postTxBalances
            );

            this.txs.push(newTx);
        }
    }

    serialize() {
        const serialized = {};
        serialized.n = this.n;
        serialized.N = this.N;
        serialized.outList = this.outList;
        serialized.inflows = this.inflows.map(inflow => inflow.serialize());
        serialized.txs = this.txs.map(tx => tx.serialize());
        return serialized;
    }

    static deserialize(d) {
        const inflows = d.inflows.map(inflowData => Outpoint.deserialize(inflowData));
        const txs = d.txs.map(txData => TX.deserialize(txData));
        return new DataSet({
            n: d.n,
            N: d.N,
            out_list: d.outList,
            inflows: inflows,
            txs: txs
        });
    }
}

// Utility functions (assuming you have implementations for them)
function btc_to_satoshis(btc) {
    return Math.round(btc * 100000000);
}

function assert(condition, message = "Assertion failed") {
    if (!condition) {
        throw new Error(message);
    }
}

// Static TX fee (for simplicity, set as a constant here)
const STATIC_TX_FEE = 1000;

class Dataset {
    constructor(n, N, outList, inflows, txs) {
        this.n = n; // Number of parties involved
        this.N = N; // Total number of transactions
        this.outList = outList; // List of outputs
        this.inflows = inflows; // List of inflows
        this.txs = txs; // List of transactions
        this.backoutTxs = []; // List of backout transactions

        this.generateBackoutTransactions();
    }

    generateBackoutTransactions() {
        // Automatically generate a second list of transactions: backout transactions
        // Find all txs in this.txs that have at least one outpoint that is not "NN".
        // Create a backout tx consuming the *previous* tx's NN outpoints.
        // Assign the balances in proportion to each party's owed coins.

        for (let i = 0; i < this.txs.length - 1; i++) {
            const currentTx = this.txs[i + 1];

            if (currentTx.containsPromise()) { // Assuming containsPromise() is a function that checks for the condition
                const backoutOuts = [];
                const backoutIns = this.txs[i].coOwnedOutputs(); // Assuming coOwnedOutputs() returns the NN outpoints

                let idx = 0;
                const X = backoutIns.reduce((sum, x) => sum + x.amount, 0); // Sum of the value of the outpoints being consumed
                const totalOwed = this.txs[i].postTxBalances.reduce((sum, owed) => sum + owed, 0);

                for (let j = 0; j < this.n; j++) {
                    const owed = this.txs[i].postTxBalances[j];
                    const prop = new Decimal(owed).dividedBy(totalOwed);
                    const fee = Math.round(new Decimal(STATIC_TX_FEE).dividedBy(this.n));

                    const adjustedX = X - fee;
                    const assignedRedemption = Math.round(new Decimal(adjustedX).times(prop));

                    if (assignedRedemption > 0) {
                        backoutOuts.push(new Outpoint(idx, j, assignedRedemption));
                        idx++;
                    }
                }

                this.backoutTxs.push(new TX(backoutOuts, backoutIns, this.txs[i].postTxBalances));
            }
        }
    }

    keysNeeded(counterparty) {
        let total = 0;

        for (const tx of this.txs) {
            for (const to of tx.outs) {
                if (to.spk_type === "p2tr-p2wsh" && to.counterparty !== counterparty) {
                    continue;
                }
                total++;
            }
        }

        for (const tx of this.backoutTxs) {
            for (const to of tx.outs) {
                if (to.counterparty === counterparty) {
                    total++;
                }
            }
        }

        return total;
    }
}

class Keys {
    get ourKeys() {
        const ourAddresses = Array.from({ length: this.n }, () => wallet.getExternalAddr(1));
        const ourPubkeys = ourAddresses.map(addr => btc.privkeyToPubkey(wallet.getKeyFromAddr(addr)));
        return { pubkeys: ourPubkeys, addresses: ourAddresses };
    }

    getUTXOsFromWallet(wallet, amtData, sourceMixdepth = 0) {
        const utxosAvailable = wallet.getUtxosByMixdepth()[sourceMixdepth];
        cjxtlog.info("These utxos available: " + JSON.stringify(utxosAvailable));

        const utxosUsed = amtData.map(ad => {
            let utxoCandidate = null;
            for (const [k, avd] of Object.entries(utxosAvailable)) {
                const [hsh, idx] = k.split(':');
                const val = satoshisToBtc(avd.value);

                if (val >= ad[0] && val <= ad[1]) {
                    const pub = btc.privkeyToPubkey(wallet.getKeyFromAddr(avd.address));

                    if (!utxoCandidate) {
                        utxoCandidate = { hash: hsh, value: val, pubkey: pub, index: parseInt(idx) };
                    } else {
                        if (Math.abs(val - (ad[0] + ad[1]) / 2.0) < Math.abs(utxoCandidate.value - (ad[0] + ad[1]) / 2.0)) {
                            utxoCandidate = { hash: hsh, value: val, pubkey: pub, index: parseInt(idx) };
                        }
                    }
                }
            }

            return utxoCandidate;
        });

        if (utxosUsed.length < amtData.length) {
            return [false, "Could not find utxos in range"];
        } else {
            return [utxosUsed, "OK"];
        }
    }

    createRealTxs(wallet, ncp, cp, lt) {
        const realTxs = template.txs.map(tx => new Tx(tx, wallet, ncp, cp));
        const realBackoutTxs = template.backoutTxs.map(tx => new OCCTx(tx, wallet, ncp, cp, { locktime: lt }));

        return [realTxs, realBackoutTxs];
    }
}

function applyKeys(wallet, realtxs, realbackouttxs, promiseIns, keys, ncp, cp) {
    const promiseInsCopy = [...promiseIns];
    const keysCopy = [...keys];

    for (let i = 0; i < template.txs.length; i++) {
        for (let j = 0; j < template.txs[i].ins.length; j++) {
            const tin = template.txs[i].ins[j];
            if (tin.counterparty === cp) {
                realtxs[i].applyKey(promiseInsCopy.shift(), "ins", j, cp);
            }
        }
    }

    for (let i = 0; i < txs.length; i++) {
        for (let j = 0; j < txs[i].outs.length; j++) {
            const to = txs[i].outs[j];
            if (to.spkType === "NN") {
                const workingKey = keysCopy.shift();
                realtxs[i].applyKey(workingKey, "outs", j, cp);

                for (let k = 0; k < txs[i + 1].ins.length; k++) {
                    const tin = txs[i + 1].ins[k];
                    if (tin.amount === to.amount && tin.spkType === "NN") {
                        realtxs[i + 1].applyKey(workingKey, "ins", k, cp);
                    }
                }

                for (let l = 0; l < backoutTxs.length; l++) {
                    const btx = backoutTxs[l];
                    for (let k = 0; k < btx.ins.length; k++) {
                        const tin = btx.ins[k];
                        if (tin.amount === to.amount) {
                            realbackouttxs[l].applyKey(workingKey, "ins", k, cp);
                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < template.txs.length; i++) {
        for (let j = 0; j < txs[i].outs.length; j++) {
            const to = txs[i].outs[j];
            if (to.spkType === "p2tr-p2wsh" && to.counterparty === cp) {
                realtxs[i].applyKey(keysCopy.shift(), "outs", j, cp);
            }
        }
    }

    for (let i = 0; i < backoutTxs.length; i++) {
        for (let j = 0; j < backoutTxs[i].outs.length; j++) {
            const to = backoutTxs[i].outs[j];
            if (to.counterparty === cp) {
                realbackouttxs[i].applyKey(keysCopy.shift(), "outs", j, cp);
            }
        }
    }

    return [realtxs, realbackouttxs];
}

class DummyWallet {
    constructor(vals) {
        this.vals = vals;
    }

    getUtxosByMixdepth() {
        return {
            0: {
                "aa".repeat(32) + ":0": {
                    'address': '1Abc',
                    'value': this.vals[0]
                },
                "bb".repeat(32) + ":1": {
                    'address': '1Def',
                    'value': this.vals[1]
                },
                "cc".repeat(32) + ":2": {
                    'address': '1Ghi',
                    'value': this.vals[2]
                }
            }
        };
    }

    getKeyFromAddr(addr) { 
        const privs = [(x + 1).toString().repeat(64) + "01" , "bb".repeat(32) + "01", "cc".repeat(32) + "01"];
        if (addr === "1Abc") {
            return privs[0];
        } else if (addr === "1Def") {
            return privs[1];
        } else if (addr === "1Ghi") {
            return privs[2];
        }
        throw new Error("No such key!");
    }
}

// Setup dummy data
const template = new Dataset(
    2,
    2,
    [
        { pubkey: "pubkey1", index: 0, amount: 5000 },
        { pubkey: "pubkey2", index: 1, amount: 3000 },
        { pubkey: "pubkey3", index: 2, amount: 2000 }
    ],
    [
        [5000, 3000, 2000]
    ],
    [
        {
            outs: [
                { spk_type: "p2tr-p2wsh", counterparty: 0 },
                { spk_type: "p2tr-p2wsh", counterparty: 1 }
            ],
            ins: [
                { spk_type: "p2tr-p2wsh", counterparty: 0 },
                { spk_type: "p2tr-p2wsh", counterparty: 1 }
            ],
            postTxBalances: [3000, 2000]
        },
        {
            outs: [
                { spk_type: "NN", counterparty: 0 },
                { spk_type: "NN", counterparty: 1 }
            ],
            ins: [
                { spk_type: "p2tr-p2wsh", counterparty: 0 },
                { spk_type: "p2tr-p2wsh", counterparty: 1 }
            ],
            postTxBalances: [2000, 1000]
        }
    ]
);

const wallet = new DummyWallet([10000, 20000, 30000]);

const keys = new Keys();
const ncp = 0;
const cp = 1;
const lt = 0;

const [realTxs, realBackoutTxs] = keys.createRealTxs(wallet, ncp, cp, lt);
applyKeys(wallet, realTxs, realBackoutTxs, [1000, 2000, 3000], [4000, 5000, 6000], ncp, cp);

// Initialize transaction details
const transactionAmount = 0.001; // Example amount in BTC per output
const numberOfOutputs = 5; // Number of outputs (participants in the CoinJoin)
const totalAmount = transactionAmount * numberOfOutputs; // Total amount being transacted
const fee = calculateDynamicFee(); // Replace with your fee calculation logic

// Create a Bitcoin transaction
const txb = new bitcoin.TransactionBuilder(network);
txb.addInput('input_tx_value', 0);  // Replace 'input_tx_value' with actual transaction ID and index

// Generate outputs dynamically
for (let i = 0; i < numberOfOutputs; i++) {
  const recipientAddress = `recipientAddress${i}`; // Replace with actual address logic or array of addresses
  txb.addOutput(recipientAddress, transactionAmount * 1e8); // Convert BTC to satoshis
}

// Add change output if necessary (replace changeAddress with actual address)
const inputAmount = totalAmount + fee; // Assuming the input amount is equal to total output amount plus fee
txb.addOutput('changeAddress', (inputAmount - totalAmount - fee) * 1e8); // Replace 'changeAddress' with the actual address

// Sign the transaction (uncomment after defining the private key)
// txb.sign(0, privateKey);  // Uncomment and replace privateKey with the actual private key

// Get the serialized transaction hex
const rawTransaction = txb.build().toHex();

// Each participant signs their input
const nonWitnessUtxo = Buffer.from('TX_HEX', 'hex');

const psbt = new bitcoin.Psbt({ network })
  .addInput({
    hash: 'TX_ID', // Replace with the actual transaction ID
    index: TX_OUT, // Replace with the actual index
    nonWitnessUtxo,
  });

// Generate outputs dynamically for PSBT
for (let i = 0; i < numberOfOutputs; i++) {
  const recipientAddress = `recipientAddress${i}`; // Replace with actual address logic or array of addresses
  psbt.addOutput({
    address: recipientAddress, // Replace with actual address
    value: transactionAmount * 1e8, // Convert BTC to satoshis
  });
}

// Add change output to PSBT
psbt.addOutput({
  address: 'changeAddress', // Sender's address for change
  value: (inputAmount - totalAmount - fee) * 1e8, // Replace with actual change calculation
});

// Finalize PSBT
psbt.finalizeAllInputs();

// Logging the results
console.log('Transaction hexadecimal:');
console.log(psbt.extractTransaction().toHex());
console.log(`Transaction Amount: ${transactionAmount} BTC per output`);
console.log(`Total Amount: ${totalAmount} BTC`);
console.log(`Dynamic Fee: ${fee} satoshis`);
console.log(`Raw Transaction Hex: ${rawTransaction}`);
