import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from './src/theme/config';
import { NavigationContainer } from '@react-navigation/native';
import { ConnectionProvider } from './src/providers/ConnectionProvider';
import OnBoardingNavigation from './src/navigation/OnBoarding';

export default function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <ConnectionProvider>
        <NavigationContainer>
          <OnBoardingNavigation />
        </NavigationContainer>
      </ConnectionProvider>
    </GluestackUIProvider>
  );
}
