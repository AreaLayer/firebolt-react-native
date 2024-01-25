import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {theme} from './src/theme';
import {Heading} from 'native-base';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme} isSSR={false}>
        <View style={styles.container}>
          <Heading fontFamily="body" color={'secondary.600'} fontSize={'2xl'}>
            FireBolt Wallet
          </Heading>
        </View>
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
