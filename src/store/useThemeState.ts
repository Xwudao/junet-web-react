import { isDark } from '@/utils/dark';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type ThemeState = {
  theme: 'dark' | 'light' | string;
  themeMode: 'auto' | 'manual';
  setTheme: (theme: 'dark' | 'light' | string) => void;
  setThemeMode: (themeMode: 'auto' | 'manual') => void;
};

const useThemeState = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        themeMode: 'manual',
        theme: isDark() ? 'dark' : 'light',
        setTheme: (theme: 'dark' | 'light' | string) => set({ theme }),
        setThemeMode: (themeMode: 'auto' | 'manual') => set({ themeMode }),
      }),
      {
        name: 'theme-save',
      },
    ),
  ),
);
export default useThemeState;
