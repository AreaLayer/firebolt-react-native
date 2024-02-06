import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import { config } from './src/theme/config';


import {NavigationContainer} from '@react-navigation/native';
import OnBoardingNavigation from './src/navigation/OnBoarding';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <OnBoardingNavigation />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;
