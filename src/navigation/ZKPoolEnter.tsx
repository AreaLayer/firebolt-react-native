import React, { useState } from 'react';
import { Box, Button, Input, Heading, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

function ZKPoolEnter() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onEnterPool = async () => {
    // Validate the input amount
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Please enter a valid positive Bitcoin amount.');
      return;
    }

    setLoading(true);

    try {
      // Generate the ZK proof for the entered amount
      const zkProof = await createZKDepositProof(parsedAmount);

      // Broadcast or submit the transaction (depending on your integration logic)
      await broadcastZKPoolEntry(zkProof);

      // Show success message and navigate (e.g., to a success screen)
      alert('ZK Pool Entry Successful!');
      navigation.goBack(); // Replace with a success screen navigation if needed
    } catch (error) {
      console.error('Error entering ZK pool:', error);
      alert('Failed to enter the ZK Pool.');
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

async function createZKDepositProof(amount: number) {
  // Replace this mock function with your ZK proof generation logic
  return new Promise((resolve) => {
    setTimeout(() => resolve(`zk-proof-for-${amount}-btc`), 2000);
  });
}

async function broadcastZKPoolEntry(zkProof: string) {
  // Replace this mock function with your actual broadcasting logic
  console.log('Broadcasting ZK Pool Entry with proof:', zkProof);
}

export default ZKPoolEnter;
