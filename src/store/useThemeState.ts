import { isDark } from '@/utils/dark';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type ThemeState = {
  theme: 'dark' | 'light' | string;
  setTheme: (theme: 'dark' | 'light' | string) => void;
};

const useThemeState = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: isDark() ? 'dark' : 'light',
        setTheme: (theme: 'dark' | 'light' | string) => set({ theme }),
      }),
      {
        name: 'theme-save',
      },
    ),
  ),
);
export default useThemeState;
