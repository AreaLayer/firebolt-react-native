import axios from 'axios';
import { getOfferDetails, Order } from 'peach-api-ts/src/private/offer/getOfferDetails';

const baseURL = 'https://api.peachbitcoin.com/v1'; // Peach API base URL

async function getSystemStatus() {
  try {
    const response = await axios.get(`${baseURL}/system`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching system status:', error);
  }
}

getSystemStatus();

interface Order {
    asset: string;
    fiat_currency: string;
    amount: number;
    // Include additional fields according to API documentation
  }
  
  async function createOrder(order: Order) {
    try {
      const response = await axios.post(`${baseURL}/orders`, order);
      console.log('Order created:', response.data);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  }
  
  const order: Order = {
    asset: 'BTC',
    fiat_currency: 'USD',
    amount: 100,
  };
  
  createOrder(order);
  const apiKey = 'your-api-key-here';
