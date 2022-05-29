import { createContext, Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/store/store';

const ThemeContext = createContext<ThemeContextType>(null!);

type themeType = 'dark' | 'light';
interface ThemeContextType {
  theme: themeType;
  darK: boolean;
  setTheme: Dispatch<SetStateAction<themeType>>;
  toggleTheme: () => void;
}
const ThemeProvider = ({ children }: any) => {
  // const [theme, setTheme] = useState<themeType>('light');
  const [theme, setTheme] = useRecoilState(themeState);
  const isDark = useMemo(() => {
    return theme === 'dark';
  }, [theme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.removeAttribute('arco-theme');
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
