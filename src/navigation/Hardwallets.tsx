import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Hardwallets } from '../screens/Hardwallets';

// Importing assets
import LedgerLogo from '../assets/Ledger-logo.png';
import BitboxLogo from '../assets/Bitbox-logo.png';
import TrezorLogo from '../assets/Trezor-Wallet-logo.png';
import PortalLogo from '../assets/PortalLogo.png';

const Stack = createStackNavigator();

const LogoScreen = ({ logo }) => (
  <View style={styles.center}>
    <Image source={logo} style={styles.image} />
  </View>
);

export const HardwalletsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="HardwalletsScreen" component={Hardwallets} />
      <Stack.Screen name="LedgerScreen">
        {() => <LogoScreen logo={LedgerLogo} />}
      </Stack.Screen>
      <Stack.Screen name="BitboxScreen">
        {() => <LogoScreen logo={BitboxLogo} />}
      </Stack.Screen>
      <Stack.Screen name="TrezorScreen">
        {() => <LogoScreen logo={TrezorLogo} />}
      </Stack.Screen>
      <Stack.Screen name="PortalLogoScreen">
        {() => <LogoScreen logo={PortalLogo} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default HardwalletsNavigator;


