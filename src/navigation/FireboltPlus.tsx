import React, { useEffect } from 'react';

const PaymentForm: React.FC = () => {
  useEffect(() => {
    const paymentForm = document.getElementById('paymentForm') as HTMLFormElement;
    if (!paymentForm) return;

    paymentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nostrInput = document.getElementById('nostr') as HTMLInputElement;
      const amountInput = document.getElementById('amount') as HTMLInputElement;

      if (!nostrInput || !amountInput) return;

      const nostr = nostrInput.value;
      const amount = amountInput.value;

      try {
        // Generate a Lightning invoice
        const response = await fetch('/create_invoice', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount, description: 'Subscription payment' }),
        });

        const invoiceData = await response.json();
        const invoice = invoiceData.invoice;

        const paymentResponse = await fetch('/process_payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nostr, amount, invoice }),
        });

        const responseData = await paymentResponse.json();
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
      <p>Enter your Npub and pay the subscription fee in satoshis:</p>
      <form id="paymentForm" action="/process_payment" method="POST">
        <label htmlFor="npub">Npub:</label><br />
        <input type="npub" id="npub" name="npub" required /><br /><br />
        <label htmlFor="amount">Amount (in satoshis):</label><br />
        <input type="number" id="amount" name="amount" min="1" required /><br /><br />
        <button type="submit">Pay with Lightning</button>
      </form>
    </>
  );
};

export default PaymentForm;

