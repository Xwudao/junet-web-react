import React, { FC } from 'react';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { getDesignTokens } from '@/core/theme';
import { useRecoilState } from 'recoil';
import { themeState } from '@/store/store';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

type IColorModeProvider = {
  children: React.ReactNode;
};
const ColorModeProvider: FC<IColorModeProvider> = (props) => {
  console.log('colorModeProvider render...');

  const [mode, setMode] = useRecoilState(themeState);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export const useMode = () => {
  const ctx = useContext(ColorModeContext);
  //null if
  if (null === ctx) {
    throw new Error('useMode must be used within a ColorModeProvider');
  }
  return ctx;
};

export default ColorModeProvider;
