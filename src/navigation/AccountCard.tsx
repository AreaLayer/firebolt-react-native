import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const AccountCard: React.FC<{ accountName: string, balance: string }> = ({ accountName, balance }) => {
  return (
    <Card>
      <div>
        <div>{accountName}</div>
        <div>Balance: {balance} BTC</div>
      </div>
      <div>
        <Button>Send</Button>
        <Button>Receive</Button>
      </div>
    </Card>
  );
};

export default AccountCard;
