import { MantineThemeOverride } from '@mantine/styles/lib/theme/types';

export const defaultTheme: MantineThemeOverride = {
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  fontFamily: 'Gilroy-Light',
  globalStyles: () => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    body: {
      height: '100vh',
    },
    '@font-face': {
      fontFamily: 'Gilroy-Light',
      src: `url(./assets/fonts/Gilroy-Light.otf)`,
    },
  }),
};
