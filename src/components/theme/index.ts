'use client';

import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface ThemeColors {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  codeBackground: string;
}

export type ThemeMode = 'light' | 'dark';

export const themes: Record<ThemeMode, ThemeColors> = {
  light: {
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#2D3436',
    textSecondary: '#64748B',
    border: 'rgba(0, 0, 0, 0.1)',
    codeBackground: '#1E293B'
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    text: '#E2E8F0',
    textSecondary: '#94A3B8',
    border: 'rgba(255, 255, 255, 0.1)',
    codeBackground: '#0F172A'
  }
};

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const toggleTheme = useCallback(() => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <StyledThemeProvider theme={themes[themeMode]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const GlobalStyle = createGlobalStyle<{ theme: ThemeColors }>`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
  }

  code {
    font-family: 'Fira Code', 'Consolas', monospace;
  }
`; 