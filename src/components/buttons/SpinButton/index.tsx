'use client';

import React from 'react';
import {
  ButtonContainer,
  ButtonBorder,
  StyledButton,
  RealButton,
  SpinButtonWrapper
} from './styles';
import { BaseComponentProps } from '../../types';

export interface SpinButtonProps extends BaseComponentProps {
  text?: string;
  onClick?: () => void;
}

export const SpinButton: React.FC<SpinButtonProps> = ({ 
  text = 'Button',
  className, 
  children,
  onClick,
  ...props 
}) => {
  return (
    <SpinButtonWrapper>
      <RealButton onClick={onClick} className={className} {...props} />
      <ButtonContainer>
        <ButtonBorder>
          <StyledButton>{text || children}</StyledButton>
        </ButtonBorder>
      </ButtonContainer>
    </SpinButtonWrapper>
  );
}; 