import React, { useState } from 'react'; // Added useState import
import BIP39 from 'bip39';

const BackupComponent = () => { // Fixed function name
  const [backup, setBackup] = useState('');
  const [backupError, setBackupError] = useState('');
  const [backupSuccess, setBackupSuccess] = useState('');
  const [backupLoading, setBackupLoading] = useState(false);
  const [backupCompleted, setBackupCompleted] = useState(false);

  const handleBackup = () => { // Renamed backup function
    setBackupLoading(true);
    setBackupError('');
    setBackupSuccess('');
    setBackupCompleted(false);
    
    try {
      const mnemonic = BIP39.generateMnemonic();
      setBackup(mnemonic);
      setBackupSuccess('Backup successful!');
      setBackupCompleted(true);
    } catch (error) {
      setBackupError('Error generating backup.');
    } finally {
      setBackupLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleBackup} disabled={backupLoading}>
        {backupLoading ? 'Backing up...' : 'Backup Wallet'}
      </button>
      {backupError && <div style={{ color: 'red' }}>{backupError}</div>}
      {backupSuccess && <div style={{ color: 'green' }}>{backupSuccess}</div>}
      {backupCompleted && <div>Your backup mnemonic: {backup}</div>}
    </div>
  );
};

export default BackupComponent;
