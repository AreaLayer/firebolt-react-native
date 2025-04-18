// Settings.jsx
import React from 'react';
import styled from 'styled-components';

// Fixed interface import - using IUser instead of User component
// Assuming this is the correct path - adjust if needed
import { IUser } from '../interfaces/user.interface';

// If you meant to import the User component, uncomment this and adjust path:
// import User from '../components/User';

// Define the interface properly
export interface IUserModel extends IUser {
  // Add any additional properties if needed
}

// Styled components for better organization
const SettingsContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin: 1.5rem 0;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  color: #555;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Settings = () => {
  return (
    <SettingsContainer className="settings">
      <Title>Settings</Title>
      <Section>
        <Subtitle>Network Settings</Subtitle>
        <Button>Configure Lightning Network Node</Button>
        <Button>Configure Coinjoin</Button>
        <Button>Nostr Backup</Button>
        <Button>Add Relay</Button>
      </Section>
      <Section>
        <Subtitle>Security Settings</Subtitle>
        <Button>Set PIN/Password</Button>
        <Button>Backup and Recovery</Button>
      </Section>
    </SettingsContainer>
  );
};

export default Settings;