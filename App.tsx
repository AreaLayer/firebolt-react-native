// No changes needed, 'react' is a core module and does not need to be imported explicitlyimport {GluestackUIProvider} from '@gluestack/ui';
import {config} from './src/theme/config';

import { NavigationContainer } from '@react-navigation/native';
import OnBoardingNavigation from './src/navigation/OnBoarding';
import {ConnectionProvider} from './src/providers/ConnectionProvider';
import OnBoardingHome from './src/screens/onboarding/ZKPool';
import Balance from './src/components/Balance';
import HomeScreen from './src/screens/Home/HomeScreen';
import BitcoinPrice from './src/components/BitcoinPrice';
import { Bech32m } from './src/app/SP/send';
import { Breez } from './src/app/lightning/send';
import React from 'react';

import { GluestackUIProvider } from '@gluestack-ui/themed';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <ConnectionProvider>
        <NavigationContainer>
          <OnBoardingNavigation />
          <OnBoardingHome navigation={undefined}>
            <Balance balance={0} fiatEquivalent={0} satsEquivalent={0} lbtcEquivalent={0} />
          </OnBoardingHome>
        </NavigationContainer>
      </ConnectionProvider>
      <BitcoinPrice/>
      <Bech32m/>
      <HomeScreen/>
      <Breez/>
    </GluestackUIProvider>
  );
}
export default App;
