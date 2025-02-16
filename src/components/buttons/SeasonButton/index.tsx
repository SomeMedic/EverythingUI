'use client';

import React from 'react';
import { StyledSeasonButton } from './styles';
import { BaseComponentProps } from '../../types';

export type SeasonVariant = 'winter' | 'summer';

export interface SeasonButtonProps extends BaseComponentProps {
  text?: string;
  onClick?: () => void;
  variant?: SeasonVariant;
}

export const SeasonButton: React.FC<SeasonButtonProps> = ({ 
  text = 'Button',
  variant = 'winter',
  className, 
  children,
  onClick,
  ...props 
}) => {
  return (
    <StyledSeasonButton 
      onClick={onClick} 
      className={className} 
      variant={variant}
      {...props}
    >
      {text || children}
    </StyledSeasonButton>
  );
}; 