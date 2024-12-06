import React from 'react';
import styled from 'styled-components';
import ReceivePayjoin from './ReceivePayjoin';
import SendPayjoin from './SendPayjoin';
import Settings from './Settings';
import Swap from './Swap';
import Invoice from './Invoice';
import Wallet from './Wallet';
import ReceivePayment from './ReceivePayment';
import  SendPayment from './SendPayment';


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
      <div>Home</div>
      <NavLinks>
        <NavLink href="#">Wallet</NavLink>
        <NavLink href="#">ReceivePayment</NavLink>
        <NavLink href="#">SendPayment</NavLink>
        <NavLink href="#">Settings</NavLink>
        <NavLink href="#">Swap</NavLink>
        <NavLink href="#">Invoice</NavLink>
        <NavLink href="#">NodeSettings</NavLink>
        <NavLink href="#">Create Wallet</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">ZkPoolEnter</NavLink>
        <NavLink href="#">ZkPoolExit</NavLink>
        <NavLink href="#">ZkMarket</NavLink>
        <NavLink href="#">SP</NavLink>
        <NavLink href="#">NWC</NavLink>
        <NavLink href="#">SendPayjoin</NavLink>
        <NavLink href="#"><ReceivePayjoin /></NavLink>
        <NavLink href="/hardware-wallet-import">Hardware Wallet Import</NavLink>
        <NavLink href="/trezor-import">Trezor Import</NavLink>
        <NavLink href="/bitbox-import">Bitbox Import</NavLink>
        <NavLink href="/ledger-import">Ledger Import</NavLink>
        <NavLink href="/hd-import">HD Import</NavLink>
         <NavLink href="/addresses">Addresses</NavLink>
        
      </NavLinks>
      <div>1 wallet (wallet.jmdat active) · YG off</div>
    </NavbarContainer>
  );
};
export default Navbar;
