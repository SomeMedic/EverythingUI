'use client';

import React from 'react';
import { StyledStardustButton, Star } from './styles';
import { BaseComponentProps } from '../../types';

export interface StardustButtonProps extends BaseComponentProps {
  text?: string;
  onClick?: () => void;
}

const StarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    version="1.1"
    style={{ 
      shapeRendering: 'geometricPrecision', 
      textRendering: 'geometricPrecision', 
      imageRendering: 'auto', 
      fillRule: 'evenodd', 
      clipRule: 'evenodd' 
    }}
    viewBox="0 0 784.11 815.53"
  >
    <g id="Layer_x0020_1">
      <path
        className="fil0"
        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
      />
    </g>
  </svg>
);

export const StardustButton: React.FC<StardustButtonProps> = ({ 
  text = 'Button',
  className, 
  children,
  onClick,
  ...props 
}) => {
  return (
    <StyledStardustButton onClick={onClick} className={className} {...props}>
      {text || children}
      {[...Array(6)].map((_, index) => (
        <Star key={index} className={`star-${index + 1}`}>
          <StarSvg />
        </Star>
      ))}
    </StyledStardustButton>
  );
}; 