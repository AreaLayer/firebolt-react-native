import React, { useState } from 'react';
import { Box, Button, Input, Heading, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
// import { createZKDepositProof, broadcastZKPoolEntry } from '../services/zkPoolService';

// Type definition for navigation prop
type NavigationProp = ReturnType<typeof useNavigation>;

const ZKPoolExit = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigation = useNavigation<NavigationProp>();

  const onEnterPool = async () => {
    try {
      // Validate the amount
      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        alert('Please enter a valid amount greater than zero.');
        return;
      }

      setLoading(true);

      // Generate ZK Proof of deposit
      // const zkProof = await createZKDepositProof(parsedAmount);

      // Broadcast the transaction
      // await broadcastZKPoolEntry(zkProof);

      // Success feedback and navigation
      alert('ZK Pool Exit Successful!');
      navigation.goBack();
    } catch (error) {
      console.error('Error entering ZK pool:', error);
      alert(`Failed to enter ZK Pool: ${error.message || 'Please try again.'}`);
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
        Exit ZK Pool
      </Heading>
      <Text size="lg" color="$white" mb="$2" textAlign="center">
        Enter the amount of Bitcoin to withdraw
      </Text>
      <Input
        variant="outline"
        size="md"
        placeholder="Amount (BTC)"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        mb="$5"
        w="80%"
        bg="$white"
        borderColor="$gray300"
        accessibilityLabel="Bitcoin amount input"
      />
      <Button
        size="md"
        variant="solid"
        bg="$primary500"
        onPress={onEnterPool}
        isDisabled={loading}
        isLoading={loading}
      >
        <Text color="$white">
          {loading ? 'Processing...' : 'Exit Pool'}
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
};
export default ZKPoolExit;
