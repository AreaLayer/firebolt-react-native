import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>FireBolt Wallet</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'orange',
  },
});

export default App;
