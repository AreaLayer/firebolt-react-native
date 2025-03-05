// AccountCard.jsx
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const AccountName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const BalanceText = styled.div`
  font-size: 1rem;
  color: #666;
`;

const StatusBadge = styled.span`
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  background-color: #e9f7ef;
  color: #27ae60;
  margin-left: 0.5rem;
`;

const AccountCard = ({ 
  accountName, 
  balance, 
  status = "Active" // Default status
}) => {
  return (
    <CardContainer>
      <AccountName>
        {accountName}
        <StatusBadge>{status}</StatusBadge>
      </AccountName>
      <BalanceText>Balance: {balance}</BalanceText>
    </CardContainer>
  );
};

// Optional: Add PropTypes for type checking
import PropTypes from 'prop-types';

AccountCard.propTypes = {
  accountName: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  status: PropTypes.string
};

export default AccountCard;