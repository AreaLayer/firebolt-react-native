import React, {useContext, createContext} from 'react';

interface Props {
  children: React.ReactNode;
}
interface ContextProps {
  loading: boolean;
}
const ConnectionContext = createContext<ContextProps>({
  loading: false,
});

export const ConnectionProvider = ({children}: Props) => {
  return (
    <ConnectionContext.Provider value={{loading: false}}>
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
