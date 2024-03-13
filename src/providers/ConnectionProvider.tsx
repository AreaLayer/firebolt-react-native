import React, {useContext, createContext, useEffect, useState} from 'react';
import storage from '../utils/storage';
import {STORAGE_KEYS} from '../utils/storage/storageKeys';
import {decryptAesGcm} from '../utils/encryption';

interface Props {
  children: React.ReactNode;
}
interface ContextProps {
  loading: boolean;
  isWalletConnected: boolean;
  validatePin: (pin: string) => boolean;
  seed: string | undefined;
}
const ConnectionContext = createContext<ContextProps>({
  loading: false,
  isWalletConnected: false,
  validatePin: () => false,
  seed: undefined,
});

export const ConnectionProvider = ({children}: Props) => {
  const [loading, setLoading] = useState(false);
  const [encryptedSeed, setEncryptedSeed] = useState();
  const [seed, setSeed] = useState<string | undefined>();

  useEffect(() => {
    const loadWallet = async () => {
      setLoading(true);
      try {
        const data = await storage.load({key: STORAGE_KEYS.seedCipher});
        setEncryptedSeed(data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };
    loadWallet();
  }, []);

  const validatePin = (pin: string) => {
    if (encryptedSeed) {
      const decryptedSeed = decryptAesGcm(encryptedSeed, pin);
      if (decryptedSeed) {
        setSeed(decryptedSeed);
        return true;
      }
    }
    return false;
  };
  return (
    <ConnectionContext.Provider
      value={{loading, isWalletConnected: !!encryptedSeed, validatePin, seed}}>
      {children}
    </ConnectionContext.Provider>
  );
};

export const useConnectionContext = () => {
  const context = useContext(ConnectionContext);
  if (context === undefined) {
    throw new Error(
      'useConnectionContext must be used within ConnectionProvider',
    );
  }
  return context;
};
