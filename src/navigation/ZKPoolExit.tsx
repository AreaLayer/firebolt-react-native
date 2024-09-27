// ZKPoolEnter.tsx

import React, { useState } from 'react';
import { Box, Button, Input, Heading, Text, Center } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

function ZKPoolEnter() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onEnterPool = async () => {
    setLoading(true);

    try {
      // Example function for creating ZK Proof of deposit
      const zkProof = await createZKDepositProof(parseFloat(amount));

      // Broadcast or submit the transaction (depends on your integration logic)
      await broadcastZKPoolEntry(zkProof);

      // Navigate to success screen or provide feedback
      alert('ZK Pool Entry Successful!');
      navigation.goBack();
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
  // Here you would integrate with your ZK proof generation logic.
  // This is a mock function to simulate generating a ZK deposit proof.
  return new Promise((resolve) => {
    setTimeout(() => resolve(`zk-proof-for-${amount}-btc`), 2000);
  });
}

async function broadcastZKPoolEntry(zkProof: string) {
  // Here you would broadcast or submit the ZK proof and transaction to your pool
  console.log('Broadcasting ZK Pool Entry with proof:', zkProof);
}

export default ZKPoolEnter;
