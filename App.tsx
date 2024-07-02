// No changes needed, 'react' is a core module and does not need to be imported explicitlyimport {GluestackUIProvider} from '@gluestack/ui';
import {config} from './src/theme/config';

import { NavigationContainer } from '@react-navigation/native';
import OnBoardingNavigation from './src/navigation/OnBoarding';
import {ConnectionProvider} from './src/providers/ConnectionProvider';
import OnBoardingHome from './src/screens/onboarding/CoinjoinMarket';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <ConnectionProvider>
        <NavigationContainer>
          <OnBoardingNavigation />
          <OnBoardingHome>
        </NavigationContainer>
      </ConnectionProvider>
    </GluestackUIProvider>
    <GluestackUIProvider config={config}></GluestackUIProvider>

  );
}

export default App;
