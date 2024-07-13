import React, { useState } from 'react';

const LightningPayment: React.FC = () => {
    const [invoice, setInvoice] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvoice(e.target.value);
    };

    const handlePayment = async () => {
        try {
            // Simulate Lightning Network payment
            // Here, you would integrate with a real Lightning Network payment processor
            console.log('Paying invoice:', invoice);
            setPaymentStatus('Payment successful!');
        } catch (error) {
            console.error("Error processing payment:", error);
            setPaymentStatus('Payment failed.');
        }
    };

    return (
        <div>
            <h2>Lightning Payment</h2>
            <input 
                type="text" 
                value={invoice} 
                onChange={handleInputChange} 
                placeholder="Enter Lightning Invoice" 
            />
            <button onClick={handlePayment}>Pay</button>
            {paymentStatus && <p>{paymentStatus}</p>}
        </div>
    );
};

export default LightningPayment;