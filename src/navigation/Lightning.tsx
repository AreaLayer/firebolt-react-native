import React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';


// Initialize the stack navigator
const Stack = createNavigationContainer();

// Define the LightningPaymentScreen component
const LightningPaymentScreen = () => {
  return (
    // Your screen content here
    <></>
  );
};

// Define PaymentConfirmationScreen component
const PaymentConfirmationScreen = () => {
  return (
    // Your screen content here
    <></>
  );
};

// Define PaymentHistoryScreen component
const PaymentHistoryScreen = () => {
  return (
    // Your screen content here
    <></>
  );
};

const LightningPayment = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LightningPayment" component={LightningPaymentScreen} />
        <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmationScreen} />
        <Stack.Screen name="PaymentHistory" component={PaymentHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LightningPayment;