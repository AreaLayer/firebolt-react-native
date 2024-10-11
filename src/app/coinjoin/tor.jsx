const axios = require('axios');
const tunnel = require('tunnel'); // For proxies

const agent = tunnel.httpsOverHttp({
  proxy: {
    host: '127.0.0.1',
    port: 9050, // Tor's default SOCKS5 port
  },
});

const instance = axios.create({
  httpsAgent: agent,
});

// Use instance for API requests
instance.get('https://mempool.space/api/v1/transactions').then(response => {
  console.log(response.data);
});
