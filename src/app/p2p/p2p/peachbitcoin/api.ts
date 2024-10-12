import axios from 'axios';
import { getOfferDetails, Order as PeachOrder } from 'peach-api-ts/src/private/offer/getOfferDetails';

const baseURL = 'https://api.peachbitcoin.com/v1'; // Peach API base URL
const apiKey = 'your-api-key-here'; // Make sure to replace this with your actual API key

// Function to fetch system status
async function getSystemStatus() {
  try {
    const response = await axios.get(`${baseURL}/system`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching system status:', error);
  }
}

// Define a local Order interface to avoid conflicts
interface LocalOrder {
  asset: string;
  fiat_currency: string;
  amount: number;
  // Include additional fields as per the API documentation
}

// Function to create a new order
async function createOrder(order: LocalOrder) {
  try {
    const response = await axios.post(`${baseURL}/orders`, order, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    console.log('Order created:', response.data);
  } catch (error) {
    console.error('Error creating order:', error);
  }
}

// Example order
const order: LocalOrder = {
  asset: 'BTC',
  fiat_currency: 'USD',
  amount: 100,
};

// Call the functions
getSystemStatus();
createOrder(order);
