'use client';

import React from 'react';
import StyledComponentsRegistry from './registry'
import { ThemeProvider } from '@/components/theme'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
} 