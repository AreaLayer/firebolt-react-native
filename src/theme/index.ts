import {extendTheme} from 'native-base';
export const theme = extendTheme({
  colors: {
    primary: {
      50: '#e5faff',
      100: '#d4f0f9',
      200: '#acddef',
      300: '#80cbe5',
      400: '#5dbadc',
      500: '#47b1d7',
      600: '#36acd6',
      700: '#2596be',
      800: '#1285ab',
      900: '#007497',
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
