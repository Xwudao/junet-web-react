import { createContext, Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/store/store';

const ThemeContext = createContext<ThemeContextType>(null!);

type themeType = 'dark' | 'light';
interface ThemeContextType {
  theme: themeType;
  setTheme: Dispatch<SetStateAction<themeType>>;
  toggleTheme: () => void;
}
const ThemeProvider = ({ children }: any) => {
  // const [theme, setTheme] = useState<themeType>('light');
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.setAttribute('theme-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.removeAttribute('theme-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
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
