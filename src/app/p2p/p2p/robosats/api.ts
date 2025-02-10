import axios from 'axios';

const baseURL = 'https://robosats.com/api/v1'; // Base API URL

async function getOrderBook() {
  try {
    const response = await axios.get(`${baseURL}/book`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching order book:', error);
  }
}

getOrderBook();

interface Order {
    asset: string;
    fiat_currency: string;
    amount: number;
    // Add other fields as per API documentation
  }
  
  async function createOrder(order: Order) {
    try {
      const response = await axios.post(`${baseURL}/order`, order);
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

