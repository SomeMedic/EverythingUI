'use client';

import React from 'react';
import { StyledGlowButton } from './styles';
import { BaseComponentProps } from '../../types';

export interface GlowButtonProps extends BaseComponentProps {
  text?: string;
  onClick?: () => void;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ 
  text = 'Button',
  className, 
  children,
  onClick,
  ...props 
}) => {
  return (
    <StyledGlowButton onClick={onClick} className={className} {...props}>
      <span>{text || children}</span>
    </StyledGlowButton>
  );
}; 