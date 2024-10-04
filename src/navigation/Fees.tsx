import React from'react';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Fees" component={Fees} />
                <Stack.Screen name="Miner Fees" component={MinerFees} />
                <Stack.Screen name="Fees Mempool Blocks" component={FeesMempoolBlocks} />
                <App.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};