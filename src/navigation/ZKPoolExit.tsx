import React, { useState } from 'react';
import { Box, Button, Input, Heading, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { createZKDepositProof, broadcastZKPoolEntry } from '../services/zkPoolService'; // Service functions

function ZKPoolEnter() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onEnterPool = async () => {
    // Validate the amount before proceeding
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Please enter a valid amount greater than zero.');
      return;
    }

    setLoading(true);

    try {
      // Generate ZK Proof of deposit
      const zkProof = await createZKDepositProof(parsedAmount);

      // Broadcast the transaction
      await broadcastZKPoolEntry(zkProof);

      // Show success feedback and navigate back or to a success screen
      alert('ZK Pool Entry Successful!');
      navigation.goBack(); // Change this to navigate to a specific success screen if needed
    } catch (error) {
      console.error('Error entering ZK pool:', error);
      alert('Failed to enter the ZK Pool. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="$primary400" p={4}>
      <Heading size="xl" color="white" mb={5}>
        Enter ZK Pool
      </Heading>
      <Text size="lg" color="white" mb={2}>
        Enter the amount of Bitcoin to deposit into the ZK Pool
      </Text>
      <Input
        placeholder="Amount (BTC)"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        mb={5}
        w="80%"
      />
      <Button onPress={onEnterPool} isDisabled={loading} isLoading={loading} variant="solid">
        {loading ? 'Processing...' : 'Enter Pool'}
      </Button>
    </Box>
  );
}

export default ZKPoolEnter;
