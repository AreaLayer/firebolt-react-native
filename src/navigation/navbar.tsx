import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #333;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <div>JoinMarket</div>
      <NavLinks>
        <NavLink href="#">Wallet</NavLink>
        <NavLink href="#">Payment</NavLink>
        <NavLink href="#">ReceivePayment</NavLink>
        <NavLink href="#">SendPayment</NavLink>
        <NavLink href="#">Settings</NavLink>
        <NavLink href="#">Create Wallet</NavLink>
        <NavLink href="#">About</NavLink>
      </NavLinks>
      <div>1 wallet (wallet.jmdat active) · YG off</div>
    </NavbarContainer>
  );
};

export default Navbar;
