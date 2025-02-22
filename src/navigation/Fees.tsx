import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Fees from '../components/Fees';
import MinerFees from '../components/MinerFees';
import FeesMempoolBlocks from '../components/FeesMempoolBlocks';
import Home from './path/to/Home'; // Make sure this path is correct for your project structure

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" // Optional: sets Home as the initial screen
        screenOptions={{
          headerShown: true, // Optional: shows header by default
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ title: 'Home' }} // Optional: customizes the header title
        />
        <Stack.Screen 
          name="Fees" 
          component={Fees}
          options={{ title: 'Fees' }}
        />
        <Stack.Screen 
          name="MinerFees" // Changed to camelCase for consistency
          component={MinerFees}
          options={{ title: 'Miner Fees' }}
        />
        <Stack.Screen 
          name="FeesMempoolBlocks" // Changed to camelCase for consistency
          component={FeesMempoolBlocks}
          options={{ title: 'Fees Mempool Blocks' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;