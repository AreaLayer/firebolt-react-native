import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingHome from '../screens/onboarding/OnBoardingHome';
import CreateWallet from '../screens/onboarding/CreateWallet';
import {SCREEN_NAMES} from './screenNames';
import ConfirmSeed from '../screens/onboarding/ConfirmSeed';
import PinSetup from '../screens/onboarding/PinSetup';
import ConfirmPin from '../screens/onboarding/ConfirmPin';
import Dashboard from '../screens/Home/Dashboard';

export type RootStackParamList = {
  OnboardingHome: undefined;
  CreateWallet: undefined;
  ConfirmSeed: {words: string[]};
  PinSetup: {words: string[]};
  ConfirmPin: {words: string[]; walletPin: number[]};
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function OnBoardingNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.OnboardingHome}
        component={OnBoardingHome}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.CreateWallet}
        component={CreateWallet}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.ConfirmSeed}
        component={ConfirmSeed}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.PinSetup}
        component={PinSetup}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.ConfirmPin}
        component={ConfirmPin}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.Dashboard}
        component={Dashboard}
      />
    </Stack.Navigator>
  );
}

export default OnBoardingNavigation;
