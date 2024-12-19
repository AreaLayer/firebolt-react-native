import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import { Hardwallets } from '../screens/Hardwallets';

const Stack = createStackNavigator();
export const HardwalletsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Hard

      walletsScreen" component={Hardwallets} />
      </Stack.Navigator>
      );
    }

    export default HardwalletsNavigator;

