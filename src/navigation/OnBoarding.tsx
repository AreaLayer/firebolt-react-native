import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingHome from '../screens/onboarding/OnBoardingHome';
const Stack = createNativeStackNavigator();

function OnBoardingNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={OnBoardingHome}
      />
    </Stack.Navigator>
  );
}

export default OnBoardingNavigation;
