import {extendTheme} from 'native-base';
export const theme = extendTheme({
  colors: {
    primary: {
      50: '#ebf3ff',
      100: '#d4e4fa',
      200: '#a3c6f7',
      300: '#6fa7f6',
      400: '#4a8cf5',
      500: '#367bf5',
      600: '#2c72f6',
      700: '#2161dc',
      800: '#1756c4',
      900: '#004aad',
    },
    secondary: {
      50: '#fff9e1',
      100: '#fff1cc',
      200: '#fbe29d',
      300: '#f8d36a',
      400: '#f5c53f',
      500: '#f4bc21',
      600: '#f3b810',
      700: '#d8a200',
      800: '#c19000',
      900: '#a77c00',
    },
  },
  fontConfig: {
    Montserrat: {
      100: {
        normal: 'Montserrat-Thin',
        italic: 'Montserrat-ThinItalic',
      },
      200: {
        normal: 'Montserrat-ExtraLight',
        italic: 'Montserrat-ExtraLightItalic',
      },
      300: {
        normal: 'Montserrat-Light',
        italic: 'Montserrat-LightItalic',
      },
      400: {
        normal: 'Montserrat-Regular',
        italic: 'Montserrat-RegularItalic',
      },
      500: {
        normal: 'Montserrat-Medium',
        italic: 'Montserrat-MediumItalic',
      },
      600: {
        normal: 'Montserrat-SemiBold',
        italic: 'Montserrat-SemiBoldItalic',
      },
      700: {
        normal: 'Montserrat-Bold',
        italic: 'Montserrat-BoldItalic',
      },
      800: {
        normal: 'Montserrat-ExtraBold',
        italic: 'Montserrat-ExtraBoldItalic',
      },
      900: {
        normal: 'Montserrat-Black',
        italic: 'Montserrat-BlackItalic',
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat',
  },
});
