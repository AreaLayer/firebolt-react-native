import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from './src/theme/config';

import {NavigationContainer} from '@react-navigation/native';
import OnBoardingNavigation from './src/navigation/OnBoarding';
import {ConnectionProvider} from './src/providers/ConnectionProvider';
import OnBoardingHome from './src/screens/onboarding/CoinjoinMarket';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <ConnectionProvider>
        <NavigationContainer>
          <OnBoardingNavigation />
          <OnBoardingHome>
        </NavigationContainer>
      </ConnectionProvider>
    </GluestackUIProvider>
  );
}

export default App;
