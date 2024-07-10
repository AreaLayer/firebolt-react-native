import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const KeyDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { keyId } = route.params;

  const [keyType, setKeyType] = useState('');
  const [keyValue, setKeyValue] = useState('');

  useEffect(() => {
    if (keyId) {
      // Fetch and set the key details for editing
      // For simplicity, using dummy data
      setKeyType('npub');
      setKeyValue('npub1...');
    }
  }, [keyId]);

  const handleSave = () => {
    // Save the key details
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Key Type</Text>
      <TextInput
        value={keyType}
        onChangeText={setKeyType}
        placeholder="e.g., npub or nsec"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Text>Key Value</Text>
      <TextInput
        value={keyValue}
        onChangeText={setKeyValue}
        placeholder="Enter key value"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default KeyDetailScreen;