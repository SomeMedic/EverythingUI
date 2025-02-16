'use client';

import React from 'react';
import { StyledFloatingButton } from './styles';
import { BaseComponentProps } from '../../types';

export interface FloatingButtonProps extends BaseComponentProps {
  text?: string;
  onClick?: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ 
  text = 'Hover Me!',
  className, 
  children,
  onClick,
  ...props 
}) => {
  return (
    <StyledFloatingButton 
      onClick={onClick} 
      className={className} 
      {...props}
    >
      {text || children}
    </StyledFloatingButton>
  );
}; 