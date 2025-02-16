'use client';

import React from 'react';
import { StyledSpaceButton, ContainerStars, Stars, Glow, Circle, StyledText } from './styles';
import { BaseComponentProps } from '../../types';

export type SpaceButtonVariant = 'default' | 'golden' | 'dark';

export interface SpaceButtonProps extends BaseComponentProps {
  text?: string;
  onClick?: () => void;
  variant?: SpaceButtonVariant;
}

export const SpaceButton: React.FC<SpaceButtonProps> = ({ 
  text = 'SPACE',
  variant = 'default',
  className, 
  children,
  onClick,
  ...props 
}) => {
  return (
    <StyledSpaceButton onClick={onClick} className={className} variant={variant} {...props}>
      <StyledText variant={variant}>{text || children}</StyledText>
      <ContainerStars variant={variant}>
        <Stars />
      </ContainerStars>
      <Glow>
        <Circle $type="first" variant={variant} />
        <Circle $type="second" variant={variant} />
      </Glow>
    </StyledSpaceButton>
  );
}; 