'use client';

import React from 'react';
import { StyledCopyButton } from './styles';
import { FileIcon } from './FileIcon';
import { BaseComponentProps } from '../../types';

export interface CopyButtonProps extends BaseComponentProps {
  text?: string;
  onClick?: () => void;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ 
  text = 'Copy',
  className, 
  children,
  onClick,
  ...props 
}) => {
  return (
    <StyledCopyButton onClick={onClick} className={className} {...props}>
      <div className="icon-container">
        <FileIcon />
        <FileIcon />
      </div>
      <span className="text">{text || children}</span>
    </StyledCopyButton>
  );
}; 