import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useConnectionContext } from '../providers/ConnectionProvider';
import { Splash } from '../components/Splash';
import { SCREEN_NAMES } from './screenNames';

// Screen Imports
import OnBoardingHome from '../screens/Onboarding/OnBoardingHome';
import CreateWallet from '../screens/Onboarding/CreateWallet';
import ConfirmSeed from '../screens/Onboarding/ConfirmSeed';
import PinSetup from '../screens/Onboarding/PinSetup';
import ConfirmPin from '../screens/Onboarding/ConfirmPin';
import Dashboard from '../screens/Home/Dashboard';
import VerifyPin from '../screens/Home/VerifyPin';
import ZKPoolEnter from './ZKPoolEnter'; // Adjusted path if needed
import ZKPoolExit from './ZKPoolExit';   // Adjusted path if needed

export type RootStackParamList = {
  OnboardingHome: undefined;
  CreateWallet: undefined;
  ConfirmSeed: { words: string[] };
  PinSetup: { words: string[] };
  ConfirmPin: { words: string[]; walletPin: number[] };
  Dashboard: undefined;
  VerifyPin: undefined;
  ZKPoolEnter: undefined;
  ZKPoolExit: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const OnBoardingNavigation = () => {
  const { loading, isWalletConnected } = useConnectionContext();

  if (loading) {
    return <Splash />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Authenticated User Flow */}
      {isWalletConnected ? (
        <Stack.Group>
          <Stack.Screen
            name={SCREEN_NAMES.VerifyPin}
            component={VerifyPin}
          />
          <Stack.Screen
            name={SCREEN_NAMES.Dashboard}
            component={Dashboard}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ZKPoolEnter}
            component={ZKPoolEnter}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ZKPoolExit}
            component={ZKPoolExit}
          />
        </Stack.Group>
      ) : (
        /* Onboarding Flow for New Users */
        <Stack.Group>
          <Stack.Screen
            name={SCREEN_NAMES.OnboardingHome}
            component={OnBoardingHome}
          />
          <Stack.Screen
            name={SCREEN_NAMES.CreateWallet}
            component={CreateWallet}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ConfirmSeed}
            component={ConfirmSeed}
          />
          <Stack.Screen
            name={SCREEN_NAMES.PinSetup}
            component={PinSetup}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ConfirmPin}
            component={ConfirmPin}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default OnBoardingNavigation;