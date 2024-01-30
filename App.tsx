import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {StyleSheet} from 'react-native';
import {theme} from './src/theme';
import OnBoardingNavigation from './src/navigation/OnBoarding';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme} isSSR={false}>
        <OnBoardingNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2596be',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
