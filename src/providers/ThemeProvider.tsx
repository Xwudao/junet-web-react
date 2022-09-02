import { createContext, useContext, useEffect } from 'react';
import { useThemeState } from '@/store';

const ThemeContext = createContext<ThemeContextType>(null!);

type themeType = 'dark' | 'light' | string;
interface ThemeContextType {
  theme: themeType;
  darK: boolean;
  setTheme: (theme: 'dark' | 'light' | string) => void;
  toggleTheme: () => void;
}
const ThemeProvider = ({ children }: any) => {
  const { theme, setTheme } = useThemeState();
  const isDark = useMemo(() => {
    return theme === 'dark';
  }, [theme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.setAttribute('arco-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.removeAttribute('arco-theme');
      document.body.removeAttribute('data-theme');
    }
  }, [theme]);

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
