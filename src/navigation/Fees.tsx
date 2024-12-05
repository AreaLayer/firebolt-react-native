import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Import Stack Navigator
import Fees from './path/to/Fees'; // Adjust paths as necessary
import MinerFees from '../components/MinerFees';
import FeesMempoolBlocks from '../components/FeesMempoolBlocks';
import Home from './path/to/Home'; // Adjust paths as necessary

const Stack = createStackNavigator(); // Create Stack Navigator

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Fees" component={Fees} />
                <Stack.Screen name="Miner Fees" component={MinerFees} />
                <Stack.Screen name="Fees Mempool Blocks" component={FeesMempoolBlocks} />
                <Stack.Screen name="Home" component={Home} /> {/* Corrected here */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
