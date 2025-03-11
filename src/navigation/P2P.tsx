import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { PEACH_API_KEY, BISQ_API_KEY, ROBOSATS_API_KEY } from '@env';

// Define types for offers
interface Offer {
  id: string;
  price: number;
  amount: number;
  [key: string]: any;
}

interface OffersState {
  peachBitcoin: Offer[];
  bisq: Offer[];
  roboSats: Offer[];
}

// Placeholder API service functions with types
const apiServices = {
  peachBitcoin: {
    getOffers: async (): Promise<Offer[]> => {
      try {
        const response = await fetch('https://api.peachbitcoin.com/offers', {
          headers: { 
            'Authorization': `Bearer ${PEACH_API_KEY}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('PeachBitcoin API request failed');
        return await response.json();
      } catch (error) {
        console.error('PeachBitcoin API error:', error);
        return [];
      }
    }
  },
  bisq: {
    getOffers: async (): Promise<Offer[]> => {
      try {
        const response = await fetch('https://api.bisq.network/offers', {
          headers: { 
            'Authorization': `Bearer ${BISQ_API_KEY}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Bisq API request failed');
        return await response.json();
      } catch (error) {
        console.error('Bisq API error:', error);
        return [];
      }
    }
  },
  roboSats: {
    getOffers: async (): Promise<Offer[]> => {
      try {
        const response = await fetch('https://api.robosats.com/offers', {
          headers: { 
            'Authorization': `Bearer ${ROBOSATS_API_KEY}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('RoboSats API request failed');
        return await response.json();
      } catch (error) {
        console.error('RoboSats API error:', error);
        return [];
      }
    }
  }
};

// P2P Trading Screen Component
const P2PTradingScreen: React.FC = () => {
  const [offers, setOffers] = useState<OffersState>({
    peachBitcoin: [],
    bisq: [],
    roboSats: []
  });
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAllOffers = async (): Promise<void> => {
    if (!PEACH_API_KEY || !BISQ_API_KEY || !ROBOSATS_API_KEY) {
      console.error('Missing API keys in .env file');
      return;
    }

    setLoading(true);
    try {
      const [peachOffers, bisqOffers, roboOffers] = await Promise.all([
        apiServices.peachBitcoin.getOffers(),
        apiServices.bisq.getOffers(),
        apiServices.roboSats.getOffers()
      ]);

      setOffers({
        peachBitcoin: peachOffers,
        bisq: bisqOffers,
        roboSats: roboOffers
      });
    } catch (error) {
      console.error('Error fetching offers:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllOffers();
  }, []);

  interface OfferCardProps {
    platform: string;
    offer: Offer;
  }

  const OfferCard: React.FC<OfferCardProps> = ({ platform, offer }) => (
    <View style={styles.offerCard}>
      <Text style={styles.platform}>{platform}</Text>
      <Text>Price: {offer.price || 'N/A'} BTC</Text>
      <Text>Amount: {offer.amount || 'N/A'}</Text>
      <Button 
        title="Buy Now" 
        onPress={() => console.log(`Buying from ${platform}`, offer)} 
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>P2P Bitcoin Trading</Text>
      
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      
      {/* PeachBitcoin Offers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PeachBitcoin Offers</Text>
        {offers.peachBitcoin.map((offer) => (
          <OfferCard key={`peach-${offer.id}`} platform="PeachBitcoin" offer={offer} />
        ))}
      </View>

      {/* Bisq Offers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bisq Offers</Text>
        {offers.bisq.map((offer) => (
          <OfferCard key={`bisq-${offer.id}`} platform="Bisq" offer={offer} />
        ))}
      </View>

      {/* RoboSats Offers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RoboSats Offers</Text>
        {offers.roboSats.map((offer) => (
          <OfferCard key={`robo-${offer.id}`} platform="RoboSats" offer={offer} />
        ))}
      </View>

      <Button title="Refresh Offers" onPress={fetchAllOffers} />
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold' as 'bold',
    marginBottom: 20,
    textAlign: 'center' as 'center'
  },
  section: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600' as '600',
    marginBottom: 12
  },
  offerCard: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 12
  },
  platform: {
    fontSize: 16,
    fontWeight: '500' as '500',
    marginBottom: 8
  }
});

// Stack Navigator Setup
const Stack = createStackNavigator();

const P2PNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="P2PTrading" 
        component={P2PTradingScreen}
        options={{ title: 'P2P Bitcoin Trading' }}
      />
    </Stack.Navigator>
  );
};

export default P2PNavigator;