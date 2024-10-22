import React from 'react';
import { View, Text, Button } from 'react-native'; // Ensure Button is imported


export const LSPComponent = () => { // Renamed the component to avoid conflict
  const handleSetLSP = () => {
    // Logic to handle LSP setting
    console.log('Set LSP clicked');
  };

  return (
    <View>
      <Text>Set LSP</Text>
      <Button 
        title="Set LSP" // Added required title prop
        onPress={handleSetLSP} // Added onPress handler
      />
    </View>
  );
};
