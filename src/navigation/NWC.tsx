import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Placeholder screens
const HomeScreen = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text style={styles.title}>NWC Wallet</Text>
    <Button
      title="Import Wallet"
      onPress={() => navigation.navigate('ImportWallet')}
    />
  </View>
);
const ImportWalletScreen = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Import Wallet</Text>
    <Button
      title="Proceed to Wallet"
      onPress={() => navigation.navigate('Wallet')}
    />
  </View>
);
const WalletScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Wallet Imported Successfully</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="ImportWallet" component={ImportWalletScreen} options={{ title: 'Import Wallet' }} />
        <Stack.Screen name="Wallet" component={WalletScreen} options={{ title: 'Wallet' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
