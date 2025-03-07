import * as bitcoin from "bitcoinjs-lib";
import { UTXOType, UTXO } from "silent-payments";

// Silent payment address generation using Diffie-Hellman
function generateSilentPaymentAddress(
    recipientPublicKey: bitcoin.ECPair.ECPairInterface,
    senderPrivateKey: bitcoin.ECPair.ECPairInterface
): string {  // Changed return type from bitcoin.Address to string
    try {
        // Validate inputs
        if (!recipientPublicKey.publicKey) {
            throw new Error("Invalid recipient public key");
        }
        if (!senderPrivateKey.privateKey) {
            throw new Error("Invalid sender private key");
        }

        // Diffie-Hellman shared secret (recipient's public key, sender's private key)
        const sharedSecret = bitcoin.crypto.sha256(
            recipientPublicKey.publicKey // .mul() not available on Buffer directly
                // Create temporary keypair for multiplication
                .constructor.fromPublicKey(recipientPublicKey.publicKey)
                .publicKey.mul(senderPrivateKey.privateKey)
        );

        // Generate new stealth address using shared secret
        const newKeyPair = bitcoin.ECPair.makeRandom({ rng: () => sharedSecret });
        const { address } = bitcoin.payments.p2wpkh({ 
            pubkey: newKeyPair.publicKey,
            network: bitcoin.networks.bitcoin // Specify network explicitly
        });

        if (!address) {
            throw new Error("Failed to generate stealth address");
        }

        return address;
    } catch (error) {
        throw new Error(`Silent payment address generation failed: ${error.message}`);
    }
}
// Example usage of silent payment address generation
try {
    const recipientKey = bitcoin.ECPair.makeRandom(); // For demo - replace with actual key
    const senderKey = bitcoin.ECPair.makeRandom();    // For demo - replace with actual key
    const stealthAddress = generateSilentPaymentAddress(recipientKey, senderKey);
    console.log("Stealth Address:", stealthAddress);
} catch (error) {
    console.error(error.message);
}

// Function to estimate the fee based on transaction size and fee rate
function estimateTransactionFee(transactionSize: number, feeRate: number): number {
    if (transactionSize <= 0 || feeRate <= 0) {
        throw new Error("Invalid transaction size or fee rate");
    }
    return Math.ceil(transactionSize * feeRate); // Round up satoshis
}

// Interface for transaction output
interface TransactionOutput {
    address: string;  // Changed from bitcoin.Address to string
    amount: number;   // In satoshis
}

function createTransactionWithFee(
    selectedUTXOs: UTXO[],
    outputs: TransactionOutput[],
    feeRate: number,
    changeAddress?: string // Optional change address parameter
): bitcoin.Transaction {
    try {
        const txb = new bitcoin.TransactionBuilder();

        // Validate inputs
        if (!selectedUTXOs.length) throw new Error("No UTXOs provided");
        if (!outputs.length) throw new Error("No outputs provided");
        if (feeRate <= 0) throw new Error("Invalid fee rate");

        // Add inputs and calculate total
        let totalInputAmount = 0;
        for (const utxo of selectedUTXOs) {
            txb.addInput(utxo.txid, utxo.index);
            totalInputAmount += utxo.txout.value;
        }

        const totalOutputAmount = outputs.reduce((sum, output) => sum + output.amount, 0);

        // More accurate size estimation (vbytes)
        const estimatedTxSize = 
            selectedUTXOs.length * 148 + // Inputs (P2PKH)
            outputs.length * 34 +        // Outputs (P2WPKH)
            10 +                         // Base transaction overhead
            selectedUTXOs.length;        // Witness data overhead

        const fee = estimateTransactionFee(estimatedTxSize, feeRate);

        // Validate funds
        if (totalInputAmount < totalOutputAmount + fee) {
            throw new Error(
                `Insufficient funds: ${totalInputAmount} available, ` +
                `${totalOutputAmount + fee} needed`
            );
        }

        // Add outputs
        for (const { address, amount } of outputs) {
            txb.addOutput(address, amount);
        }

        // Add change output if applicable
        const change = totalInputAmount - totalOutputAmount - fee;
        if (change > 0) {
            if (!changeAddress) {
                throw new Error("Change address required for transaction with change");
            }
            txb.addOutput(changeAddress, change);
        }

        return txb.buildIncomplete();
    } catch (error) {
        throw new Error(`Transaction creation failed: ${error.message}`);
    }
}

// Example usage
try {
    const feeRate = 20; // Satoshis per byte
    const sampleUTXOs: UTXO[] = [
        // Replace with real UTXO data
        { txid: "1234...", vout: 0, txout: { value: 100000 } }
    ];
    const sampleOutputs: TransactionOutput[] = [
        { address: "bc1q...", amount: 50000 }
    ];
    const changeAddress = "bc1q..."; // Add your change address
    
    const transactionWithFee = createTransactionWithFee(
        sampleUTXOs,
        sampleOutputs,
        feeRate,
        changeAddress
    );


    console.log("Transaction created successfully:", transactionWithFee);
} catch (error) {    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unknown error occurred");
    }
}