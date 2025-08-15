import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from './src/theme/config';

import {NavigationContainer} from '@react-navigation/native';
import OnBoardingNavigation from './src/navigation/OnBoarding';
import {ConnectionProvider} from './src/providers/ConnectionProvider';
import Balance from './src/components/Balance';
import BitcoinPrice from './src/components/BitcoinPrice';
import HomeScreen from './src/screens/Home/HomeScreen';
import OnBoardingHome from './src/screens/onboarding/OnBoardingHome';

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
      <HomeScreen/>
    </GluestackUIProvider>
  );
}
export default App;
