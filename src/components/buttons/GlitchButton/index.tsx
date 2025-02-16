'use client';

import React from 'react';
import { StyledGlitchButton, Text, TextDecoration, Decoration } from './styles';
import { BaseComponentProps } from '../../types';

export interface GlitchButtonProps extends BaseComponentProps {
  text?: string;
  onClick?: () => void;
}

export const GlitchButton: React.FC<GlitchButtonProps> = ({ 
  text = '// Hover me',
  className, 
  children,
  onClick,
  ...props 
}) => {
  return (
    <StyledGlitchButton onClick={onClick} className={className} {...props}>
      <Text>{text}</Text>
      <TextDecoration>_</TextDecoration>
      <Decoration>⇒</Decoration>
    </StyledGlitchButton>
  );
}; 