import React, { useEffect } from'react';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Fees" component={Fees} />
                <Stack.Screen name="Miner Fees" component={MinerFees} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};