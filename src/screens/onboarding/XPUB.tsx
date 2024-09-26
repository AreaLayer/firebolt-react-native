import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Define the react nativation 
const { createStackNavigator } = require('@react-navigation/stack');
const Stack = createStackNavigator();

const Home = ({ navigation }: { navigation: any }) => {
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
const HDImport = ({ navigation }: { navigation: any }) => {
  const [mnemonic, setMnemonic] = useState('');

  const handleImport = () => {
    // Placeholder function for navigation
    navigation.navigate('Addresses');
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
    </ScrollView>
  );
};
// Screen for displaying XPUB and derived addresses (UI only, no logic)
const Addresses = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold' }}>Extended Public Keys (XPUB):</Text>
      <Text>XPUB (P2SH-P2WPKH SegWit): [XPUB here]</Text>
      <Text>XPUB (P2WPKH Native SegWit): [XPUB here]</Text>
      <Text>XPUB (P2TR Taproot): [XPUB here]</Text>

      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Derived Addresses:</Text>
      <Text>P2SH-P2WPKH Address (SegWit): [Address here]</Text>
      <Text>P2WPKH Address (Native SegWit): [Address here]</Text>
      <Text>P2TR Address (Taproot): [Address here]</Text>
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
