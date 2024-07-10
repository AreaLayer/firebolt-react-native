import { IUser } from './user.interface';

export interface 
IUserModel extends IUser, Document {
}
import React from 'react';

const Settings: React.FC = () => (
  <div className="settings">
    <h2>Settings</h2>
    <div>
      <h3>Network Settings</h3>
      <button>Configure Lightning Network Node</button>
      <button>Configure Coinjoin</button>
      <button>Nostr Backup</button>
    </div>
    <div>
      <h3>Security Settings</h3>
      <button>Set PIN/Password</button>
      <button>Backup and Recovery</button>
    </div>
  </div>
);

export default Settings;
