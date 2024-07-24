import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

const LightningPaymment = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LightningPaymment" component={LightningPaymment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LightningPaymment;

