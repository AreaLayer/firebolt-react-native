import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Line } from 'react-native-svg';

const PriceTrendGraph: React.FC = () => {
  return (
    <View style={styles.container}>
      <Svg height="200" width="100%">
        {/* Example line, replace with actual graph rendering */}
        <Line x1="0" y1="100" x2="100%" y2="100" stroke="black" strokeWidth="2" />
      </Svg>
      <Text style={styles.label}>Price Trend (24h)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#7D7D7D',
  },
});

export default PriceTrendGraph;
