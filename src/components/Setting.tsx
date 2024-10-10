import { IUser } from './user.interface';
import React from 'react';
import { Document } from 'mongoose'; // Import Document if you are using mongoose

export interface IUserModel extends IUser, Document {
  // Add any additional properties if needed
}

const Settings: React.FC = () => (
  <div className="settings">
    <h2>Settings</h2>
    <div>
      <h3>Network Settings</h3>
      <button>Configure Lightning Network Node</button>
      <button>Configure Coinjoin</button>
      <button>Nostr Backup</button>
      <button>Add Relay</button> {/* Fixed typo here */}
    </div>
    <div>
      <h3>Security Settings</h3>
      <button>Set PIN/Password</button>
      <button>Backup and Recovery</button>
    </div>
  </div>
);

export default Settings;

