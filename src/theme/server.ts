import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/api/send-payment', (req, res) => {
  const { address, amount, useLightning, useCoinjoin } = req.body;
  console.log('Send payment:', { address, amount, useLightning, useCoinjoin });
  res.send({ status: 'success' });
});

app.post('/api/generate-invoice', (req, res) => {
  const { amount } = req.body;
  const invoice = `lnbc${amount}...`;  // Mock invoice
  res.send({ invoice });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

export default app;