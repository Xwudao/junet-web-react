import { ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#ff5722',
            light: '#ffccbc',
            dark: '#e64a19',
          },
          divider: '#BDBDBD',
          text: {
            primary: '#212121',
            secondary: '#757575',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#f4511e',
            light: '#ff5722',
            dark: '#e64a19',
          },
          secondary: {
            main: '#ef6c00',
          },
          divider: '#BDBDBD',
          text: {
            primary: '#fff',
            secondary: '#757575',
          },
        }),
  },
});
