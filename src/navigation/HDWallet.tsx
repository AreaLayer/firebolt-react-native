import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import * as bitcoin from 'bitcoinjs-lib';

// Define the Stack navigator
const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Import HD Wallet"
        onPress={() => navigation.navigate('HDImport')}
      />
    </View>
  );
};

// Screen for HD Wallet import
const HDImport = ({ navigation }) => {
  const [mnemonic, setMnemonic] = useState('');
  const [wallet, setWallet] = useState(null);
  const [error, setError] = useState('');

  const handleImport = () => {
    if (bip39.validateMnemonic(mnemonic)) {
      const seed = bip39.mnemonicToSeedSync(mnemonic);
      const root = bip32.fromSeed(seed);
      setWallet(root);
      setError('');
      navigation.navigate('Addresses', { root });
    } else {
      setError('Invalid mnemonic phrase. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text>Enter Mnemonic Phrase to Import HD Wallet:</Text>
      <TextInput
        value={mnemonic}
        onChangeText={setMnemonic}
        placeholder="Enter mnemonic..."
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Import Wallet" onPress={handleImport} />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </ScrollView>
  );
};

// Screen for displaying addresses
const Addresses = ({ route }) => {
  const { root } = route.params;
  const network = bitcoin.networks.bitcoin; // Mainnet

  // Derive different addresses
  const deriveAddress = (path) => {
    const accountNode = root.derivePath(path);
    
    if (path.startsWith("m/49'")) {
      // SegWit P2SH-P2WPKH
      const keyPair = bitcoin.ECPair.fromPrivateKey(accountNode.privateKey);
      const p2wpkh = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network });
      return bitcoin.payments.p2sh({ redeem: p2wpkh, network }).address;
    } else if (path.startsWith("m/84'")) {
      // Native SegWit P2WPKH
      const keyPair = bitcoin.ECPair.fromPrivateKey(accountNode.privateKey);
      return bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network }).address;
    } else if (path.startsWith("m/86'")) {
      // Taproot P2TR
      return bitcoin.payments.p2tr({ pubkey: accountNode.publicKey, network }).address;
    }
    return null;
  };

  const addresses = {
    p2sh_p2wpkh: deriveAddress("m/49'/0'/0'/0/0"),
    p2wpkh: deriveAddress("m/84'/0'/0'/0/0"),
    p2tr: deriveAddress("m/86'/0'/0'/0/0"),
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold' }}>Generated Bitcoin Addresses:</Text>
      <Text>P2SH-P2WPKH (SegWit): {addresses.p2sh_p2wpkh}</Text>
      <Text>P2WPKH (Native SegWit): {addresses.p2wpkh}</Text>
      <Text>P2TR (Taproot): {addresses.p2tr}</Text>
    </ScrollView>
  );
};

// Main App component with navigation
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HDImport" component={HDImport} />
        <Stack.Screen name="Addresses" component={Addresses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
