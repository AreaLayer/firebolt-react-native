import React, { useEffect } from 'react';

const PaymentForm: React.FC = () => {
  useEffect(() => {
    const paymentForm = document.getElementById('paymentForm') as HTMLFormElement;
    if (!paymentForm) return;

    paymentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const amountInput = document.getElementById('amount') as HTMLInputElement;

      if (!emailInput || !amountInput) return;

      const email = emailInput.value;
      const amount = amountInput.value;

      try {
        const web3Modal = new Web3Modal.default({
          network: 'testnet',
          cacheProvider: true,
        });

        const provider = await web3Modal.connectTo('lightning');
        const invoice = await provider.makeInvoice({ amount, description: 'Subscription payment' });

        const response = await fetch('/process_payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, amount, invoice }),
        });

        const responseData = await response.json();
        alert(responseData.message);
      } catch (error) {
        console.error('Error processing payment:', error);
        alert('Payment failed. Please try again.');
      }
    });
  }, []);

  return (
    <>
      <h1>Subscribe to our service!</h1>
      <p>Enter your email address and pay the subscription fee in satoshis:</p>
      <form id="paymentForm" action="/process_payment" method="POST">
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />
        <label htmlFor="amount">Amount (in satoshis):</label><br />
        <input type="number" id="amount" name="amount" min="1" required /><br /><br />
        <button type="submit">Pay with Lightning</button>
      </form>
    </>
  );
};

export default PaymentForm;
