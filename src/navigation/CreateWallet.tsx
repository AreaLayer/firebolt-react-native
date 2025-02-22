import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as bitcoin from 'bitcoinjs-lib';
import QRCode from 'react-native-qrcode-svg';
import { encode } from 'light-bolt11-decoder'; // Changed import to get encode directly

const CreateWallet = () => {
  const [segwitAddress, setSegwitAddress] = useState<string | null>(null);
  const [taprootAddress, setTaprootAddress] = useState<string | null>(null);
  const [invoice, setInvoice] = useState<string | null>(null);

  // Function to generate SegWit and Taproot addresses
  const generateAddresses = () => {
    try {
      const keyPair = bitcoin.ECPair.makeRandom({ network: bitcoin.networks.bitcoin });
      const { address: segwitAddr } = bitcoin.payments.p2wpkh({
        pubkey: keyPair.publicKey,
        network: bitcoin.networks.bitcoin,
      });
      const { address: taprootAddr } = bitcoin.payments.p2tr({
        pubkey: keyPair.publicKey,
        network: bitcoin.networks.bitcoin,
      });

      setSegwitAddress(segwitAddr || null);
      setTaprootAddress(taprootAddr || null);
    } catch (error) {
      console.error('Error generating addresses:', error);
    }
  };

  // Function to create a Lightning invoice (BOLT11)
  const generateBolt11Invoice = () => {
    try {
      const amountSats = 10000; // Example amount in satoshis
      const paymentRequest = encode({
        paymentHash: Buffer.from('00'.repeat(32), 'hex'), // Dummy payment hash
        amount: amountSats.toString(), // Amount in satoshis as string
        timestamp: Math.floor(Date.now() / 1000),
        tags: [
          {
            tagName: 'payment_hash',
            data: '00'.repeat(32), // 32 bytes of zeros
          },
          {
            tagName: 'description',
            data: 'Payment for goods',
          },
        ],
      });
      setInvoice(paymentRequest || null);
    } catch (error) {
      console.error('Error generating invoice:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Generate Wallet Addresses" onPress={generateAddresses} />
      
      {segwitAddress && (
        <View style={styles.addressContainer}>
          <Text style={styles.label}>SegWit Address:</Text>
          <Text style={styles.address}>{segwitAddress}</Text>
          <QRCode value={segwitAddress} size={150} />
        </View>
      )}

      {taprootAddress && (
        <View style={styles.addressContainer}>
          <Text style={styles.label}>Taproot Address:</Text>
          <Text style={styles.address}>{taprootAddress}</Text>
          <QRCode value={taprootAddress} size={150} />
        </View>
      )}

      <Button title="Generate Lightning Invoice" onPress={generateBolt11Invoice} />
      
      {invoice && (
        <View style={styles.addressContainer}>
          <Text style={styles.label}>Lightning Invoice:</Text>
          <Text style={styles.address}>{invoice}</Text>
          <QRCode value={invoice} size={150} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  addressContainer: {
    marginVertical: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default CreateWallet;

