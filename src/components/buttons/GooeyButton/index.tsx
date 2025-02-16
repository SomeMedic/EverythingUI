'use client';

import React from 'react';
import { StyledGooeyButton, Blobs, Blob } from './styles';
import { GooeyFilter } from './GooeyFilter';
import { BaseComponentProps } from '../../types';

export interface GooeyButtonProps extends BaseComponentProps {
  text?: string;
  onClick?: () => void;
}

export const GooeyButton: React.FC<GooeyButtonProps> = ({ 
  text = 'Hover me',
  className, 
  children,
  onClick,
  ...props 
}) => {
  return (
    <>
      <StyledGooeyButton onClick={onClick} className={className} {...props}>
        {text || children}
        <Blobs>
          <Blob />
          <Blob />
          <Blob />
        </Blobs>
      </StyledGooeyButton>
      <GooeyFilter />
    </>
  );
}; 