import React, { useState } from 'react';
import { Box, Button, Input, Heading, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

// Proper type definition for navigation
type NavigationProp = {
  goBack: () => void;
};

const ZKPoolEnter = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  const onEnterPool = async () => {
    try {
      // Validate the input amount
      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        alert('Please enter a valid positive Bitcoin amount.');
        return;
      }
      setLoading(true);
      // Generate the ZK proof for the entered amount
      const zkProof = await createZKDepositProof(parsedAmount);
      // Broadcast or submit the transaction
      await broadcastZKPoolEntry(zkProof);
      // Show success message and navigate
      alert('ZK Pool Entry Successful!');
      navigation.goBack();
    } catch (error) {
      console.error('Error entering ZK pool:', error);
      alert(`Failed to enter the ZK Pool: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="$primary400"
      p="$4"
    >
      <Heading size="xl" color="$white" mb="$5">
        Enter ZK Pool
      </Heading>
      <Text size="lg" color="$white" mb="$2">
        Enter the amount of Bitcoin to deposit
      </Text>
      <Input
        variant="outline"
        size="md"
        placeholderTextColor="$gray400"
        placeholder="Amount (BTC)"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        mb="$5"
        w="80%"
        bg="$white"
        borderColor="$gray300"
      />
      <Button
        size="md"
        variant="solid"
        bg="$primary500"
        onPress={onEnterPool}
        isDisabled={loading}
        $loading={loading} // Fixed from $loading to isLoading
      >
        <Text color="$white">
          {loading ? 'Processing...' : 'Enter Pool'}
        </Text>
      </Button>
    </Box>
  );
};

const createZKDepositProof = async (amount: number): Promise<string> => {
  // Replace with actual ZK proof generation logic
  return new Promise((resolve) => {
    setTimeout(() => resolve(`zk-proof-for-${amount}-btc`), 2000);
  });
};

const broadcastZKPoolEntry = async (zkProof: string): Promise<void> => {
  // Replace with actual broadcasting logic
  console.log('Broadcasting ZK Pool Entry with proof:', zkProof);
  return Promise.resolve();
};

export default ZKPoolEnter;