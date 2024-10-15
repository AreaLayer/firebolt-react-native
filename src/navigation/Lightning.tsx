import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator(); // Initialize the stack navigator

const LightningPayment = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LightningPayment" component={LightningPaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Define the LightningPaymentScreen component
const LightningPaymentScreen = () => {
  return (
    // Your screen content here
    <></>
  );
};

export default LightningPayment;
