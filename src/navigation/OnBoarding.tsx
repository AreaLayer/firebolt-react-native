import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useConnectionContext } from '../providers/ConnectionProvider';
import { Splash } from '../components/Splash';

// Onboarding screens
import OnBoardingHome from '../screens/Onboarding';
import CreateWallet from '../screens/onboarding/CreateWallet';
import ConfirmSeed from '../screens/onboarding/ConfirmSeed';
import PinSetup from '../screens/onboarding/PinSetup';
import ConfirmPin from '../screens/onboarding/ConfirmPin';

// Main app screens
import Dashboard from '../screens/Home/Dashboard';
import VerifyPin from '../screens/Home/VerifyPin';

// Screen name constants
import { SCREEN_NAMES } from './screenNames';

export type RootStackParamList = {
  OnboardingHome: undefined;
  CreateWallet: undefined;
  ConfirmSeed: { words: string[] };
  PinSetup: { words: string[] };
  ConfirmPin: { words: string[]; walletPin: number[] };
  Dashboard: undefined;
  VerifyPin: undefined;
  ZKPool: undefined;
  XPub: undefined;
  Send: undefined;
  Receive: undefined;
  Settings: undefined;
  FireboltPlus: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function OnBoardingNavigation() {
  const { loading, isWalletConnected } = useConnectionContext();

  if (loading) {
    return <Splash />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isWalletConnected ? (
        // Logged-in / wallet connected flow
        <>
          <Stack.Screen name={SCREEN_NAMES.VerifyPin} component={VerifyPin} />
          <Stack.Screen name={SCREEN_NAMES.Dashboard} component={Dashboard} />
        </>
      ) : (
        // Onboarding flow
        <>
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
          <Stack.Screen
            name={SCREEN_NAMES.Dashboard}
            component={Dashboard}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default OnBoardingNavigation;

