import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BitcoinPrice: React.FC = () => {
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
                setPrice(response.data.bpi.USD.rate_float);
            } catch (error) {
                console.error("Error fetching the Bitcoin price:", error);
            }
        };

        fetchPrice();
    }, []);

    return (
        <div>
            <h1>Bitcoin Price</h1>
            {price ? <p>${price.toFixed(2)}</p> : <p>Loading...</p>}
        </div>
    );
};

export default BitcoinPrice;