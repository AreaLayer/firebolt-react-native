import * as bitcoin from "bitcoinjs-lib";
import { UTXOType, UTXO} from "silent-payments";
// Silent payment address generation using Diffie-Hellman
function generateSilentPaymentAddress(
    recipientPublicKey: bitcoin.ECPairInterface,
    senderPrivateKey: bitcoin.ECPairInterface
): bitcoin.Address {
    // Diffie-Hellman shared secret (recipient's public key, sender's private key)
    const sharedSecret = bitcoin.crypto.sha256(
        bitcoin.ECPair.fromPublicKey(
            recipientPublicKey.publicKey
        ).publicKey.mul(senderPrivateKey.privateKey!)
    );

    // Generate new stealth address using shared secret
    const newKeyPair = bitcoin.ECPair.makeRandom({ rng: () => sharedSecret });
    const { address } = bitcoin.payments.p2wpkh({ pubkey: newKeyPair.publicKey });

    return address!;
}

// Example usage of silent payment address generation
const recipientKey = ECPair.fromPublicKey(/* recipient public key */);
const senderKey = ECPair.fromWIF(/* sender private key */);
const stealthAddress = generateSilentPaymentAddress(recipientKey, senderKey);

console.log("Stealth Address:", stealthAddress);

// Function to estimate the fee based on transaction size and fee rate
function estimateTransactionFee(transactionSize: number, feeRate: number): number {
    return transactionSize * feeRate; // satoshis per byte
}

// Allow users to set custom fee rates
function createTransactionWithFee(
    selectedUTXOs: UTXO[],
    outputs: { address: bitcoin.Address; amount: number }[],
    feeRate: number
): bitcoin.Transaction {
    const txb = new bitcoin.TransactionBuilder();
    
    let totalInputAmount = 0;
    for (const utxo of selectedUTXOs) {
        txb.addInput(utxo.txid, utxo.index);
        totalInputAmount += utxo.txout.value;
    }

    let totalOutputAmount = outputs.reduce((sum, output) => sum + output.amount, 0);

    // Estimate transaction size (simplified, can adjust for more accuracy)
    const estimatedTxSize = selectedUTXOs.length * 180 + outputs.length * 34 + 10;

    const fee = estimateTransactionFee(estimatedTxSize, feeRate);

    // If inputs cover outputs and fee, add outputs
    if (totalInputAmount >= totalOutputAmount + fee) {
        for (const { address, amount } of outputs) {
            txb.addOutput(address, amount);
        }

        // Add change output (if needed)
        const change = totalInputAmount - totalOutputAmount - fee;
        if (change > 0) {
            const changeAddress = /* user's change address */;
            txb.addOutput(changeAddress, change);
        }
    } else {
        throw new Error("Insufficient funds to cover the transaction fee.");
    }

    return txb.buildIncomplete();
}

// Example usage
const feeRate = 20; // Satoshis per byte, chosen by the user from UI
const transactionWithFee = createTransactionWithFee(selectedUTXOs, outputs, feeRate);
