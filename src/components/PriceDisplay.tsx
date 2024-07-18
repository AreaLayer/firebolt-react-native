import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PriceDisplayProps {
  price: string;
  lastUpdated: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, lastUpdated }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.lastUpdated}>Updated {lastUpdated} ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  price: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#7D7D7D',
  },
});

export default PriceDisplay;
