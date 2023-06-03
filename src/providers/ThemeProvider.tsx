import { createContext, useContext, useEffect, useMemo } from 'react';
import { useThemeState } from '@/store';

const ThemeContext = createContext<ThemeContextType>(null!);

export type ThemeType = 'dark' | 'light' | 'auto' | string;
export type ThemeMode = 'auto' | 'manual';
interface ThemeContextType {
  theme: ThemeType;
  darK: boolean;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
}
const ThemeProvider = ({ children }: any) => {
  const { theme, setTheme, themeMode, setThemeMode } = useThemeState();
  const isDark = useMemo(() => {
    return (themeMode === 'auto' && isSystemDark()) || theme === 'dark';
  }, [theme, themeMode]);

  const isSystemDark = () => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return darkModeMediaQuery.matches;
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.removeAttribute('arco-theme');
    }
  }, [theme, themeMode]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, darK: isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme, ThemeContext };
