import create from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  theme: 'dark' | 'light' | string;
  setTheme: (theme: 'dark' | 'light' | string) => void;
};

const useThemeState = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      setTheme: (theme: 'dark' | 'light' | string) => {
        set((state) => ({ ...state, theme }));
      },
    }),
    {
      name: 'theme',
    },
  ),
);
export default useThemeState;
