'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

export interface ThemeColors {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  codeBackground: string;
  accent: string;
}

export type ThemeMode = 'light' | 'dark';

export const themes: Record<ThemeMode, ThemeColors> = {
  light: {
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#2D3436',
    textSecondary: '#64748B',
    border: 'rgba(0, 0, 0, 0.1)',
    codeBackground: '#1E293B',
    accent: '#4ECDC4'
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    text: '#E2E8F0',
    textSecondary: '#94A3B8',
    border: 'rgba(255, 255, 255, 0.1)',
    codeBackground: '#0F172A',
    accent: '#4ECDC4'
  }
};

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const toggleTheme = useCallback(() => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const currentTheme = themes[themeMode];

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        <GlobalStyle theme={currentTheme} />
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