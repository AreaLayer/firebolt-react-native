import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import * as bitcoin from 'bitcoinjs-lib';
import QRCode from 'react-native-qrcode-svg';
import * as bolt11 from 'light-bolt11-decoder';

const CreateWallet = () => {
  const [segwitAddress, setSegwitAddress] = useState<string | null>(null);
  const [taprootAddress, setTaprootAddress] = useState<string | null>(null);
  const [invoice, setInvoice] = useState<string | null>(null);

  // Function to generate SegWit and Taproot addresses
  const generateAddresses = () => {
    const keyPair = bitcoin.ECPair.makeRandom();
    const {address: segwitAddr} = bitcoin.payments.p2wpkh({
      pubkey: keyPair.publicKey,
    });
    const {address: taprootAddr} = bitcoin.payments.p2tr({
      pubkey: keyPair.publicKey,
    });

    setSegwitAddress(segwitAddr || '');
    setTaprootAddress(taprootAddr || '');
  };

  // Function to create a Lightning invoice (BOLT11)
  const generateBolt11Invoice = () => {
    const amountSats = 10000; // Example amount in satoshis
    const invoice = bolt11.encode({
      millisatoshis: amountSats * 1000,
      tags: [{tagName: 'purpose', data: 'Payment for goods'}],
    });
    setInvoice(invoice);
  };

  return (
    <View>
      <Button title="Generate Wallet Addresses" onPress={generateAddresses} />
      {segwitAddress && (
        <View>
          <Text>SegWit Address: {segwitAddress}</Text>
          <QRCode value={segwitAddress} size={150} />
        </View>
      )}
      {taprootAddress && (
        <View>
          <Text>Taproot Address: {taprootAddress}</Text>
          <QRCode value={taprootAddress} size={150} />
        </View>
      )}
      <Button title="Generate Lightning Invoice" onPress={generateBolt11Invoice} />
      {invoice && (
        <View>
          <Text>Lightning Invoice: {invoice}</Text>
          <QRCode value={invoice} size={150} />
        </View>
      )}
    </View>
  );
};

export default CreateWallet;
