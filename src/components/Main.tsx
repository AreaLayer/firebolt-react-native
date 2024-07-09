import React from 'react';
import styled from 'styled-components';
import AccountCard from './AccountCard';

const MainContainer = styled.div`
  padding: 2rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      <h1>wallet.jmdat</h1>
      <div>Total Balance: ********** BTC</div>
      <Button>Maker Service</Button>
      <AccountCard accountName="Account 0" balance="**********" />
      <AccountCard accountName="Account 1" balance="**********" />
      <AccountCard accountName="Account 2" balance="**********" />
      <AccountCard accountName="Account 3" balance="**********" />
      <AccountCard accountName="Account 4" balance="**********" />
      <Button>Show UTXOs</Button>
    </MainContainer>
  );
};

export default Main;
