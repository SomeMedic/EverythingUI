import React from 'react';
import { ThemeColors } from '../theme';

// Common component props
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// Component preview props
export interface ComponentPreviewProps extends BaseComponentProps {
  theme: ThemeColors;
  onThemeChange: (theme: Partial<ThemeColors>) => void;
  showCode?: boolean;
}

// Code generation options
export interface CodeGenerationOptions {
  framework?: 'react' | 'next';
  typescript?: boolean;
  includeImports?: boolean;
}

// Theme types
export type ThemeVariant = 'glassmorphic' | 'skeuomorphic';

// Common style props
export interface StyleProps {
  variant?: ThemeVariant;
} 