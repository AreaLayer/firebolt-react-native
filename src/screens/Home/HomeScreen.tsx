// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [keys] = useState<{ id: string; type: string; value: string }[]>([
    { id: '1', type: 'npub', value: 'npub1...' },
    { id: '2', type: 'nsec', value: 'nsec1...' }
  ]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={keys}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.type}: {item.value}</Text>
            <Button
              title="Edit"
              onPress={() => navigation.navigate('KeyDetail' as never, { keyId: item.id } as never)}
            />
          </View>
        )}
      />
      <Button
        title="Add Key"
        onPress={() => navigation.navigate('KeyDetail', { keyId: null })}
      />
    </View>
  );
};
export default HomeScreen;
