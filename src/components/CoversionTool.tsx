import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native'; // Added Alert import
import axios from 'axios'; // Added axios import
import { Picker } from '@react-native-picker/picker'; // Ensure you have this package installed

const ConversionTool: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('usd'); // CoinGecko uses lowercase currency codes
  const [result, setResult] = useState('');

  const handleConvert = async () => {
    if (!amount) {
      Alert.alert('Input Error', 'Please enter a valid amount.');
      return;
    }

    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: 'bitcoin',
          vs_currencies: currency,
        },
      });

      const conversionRate = response.data.bitcoin[currency];
      const value = parseFloat(amount) * conversionRate;
      setResult(value.toFixed(2));
    } catch (error) {
      Alert.alert('Error', 'Unable to fetch conversion rate.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Bitcoin Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Picker
        selectedValue={currency}
        style={styles.picker}
        onValueChange={(itemValue) => setCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="usd" />
        <Picker.Item label="EUR" value="eur" />
        <Picker.Item label="GBP" value="gbp" />
        <Picker.Item label="JPY" value="jpy" />
        <Picker.Item label="CNY" value="cny" />
      </Picker>
      <Button title="Convert" onPress={handleConvert} />
      {result && (
        <Text style={styles.result}>
          Equivalent Value: {result} {currency.toUpperCase()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default ConversionTool;
