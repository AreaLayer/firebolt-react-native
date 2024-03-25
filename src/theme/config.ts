import {createConfig} from '@gluestack-ui/themed';
import {config as defaultConfig} from '@gluestack-ui/config';

export const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      primary50: '#187cff',
      primary100: '#006efd',
      primary200: '#0062e2',
      primary300: '#0057c8',
      primary400: '#004aad',
      primary500: '#03459b',
      primary600: '#063e88',
      primary700: '#083877',
      primary800: '#093166',
      primary900: '#092a55',
      secondary50: '#ffdd7e',
      secondary100: '#fed565',
      secondary200: '#facc4e',
      secondary300: '#f6c338',
      secondary400: '#f4bc21',
      secondary500: '#efb515',
      secondary600: '#dfa915',
      secondary700: '#cc9c18',
      secondary800: '#ba901b',
      secondary900: '#a8831d',
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
      mono: 'Montserrat',
    },
  },
});
