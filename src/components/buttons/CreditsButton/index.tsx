import React from 'react';
import { StyledCreditsButton, Fold, PointsWrapper, Point, Inner, Icon } from './styles';
import { BaseComponentProps } from '../../types';

export interface CreditsButtonProps extends BaseComponentProps {
  text?: string;
  onClick?: () => void;
}

const LightningIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.5"
  >
    <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
  </svg>
);

export const CreditsButton: React.FC<CreditsButtonProps> = ({ 
  text = 'Credits',
  className, 
  children,
  onClick,
  ...props 
}) => {
  return (
    <StyledCreditsButton onClick={onClick} className={className} {...props}>
      <Fold />
      <PointsWrapper>
        {[...Array(10)].map((_, i) => (
          <Point key={i} $index={i} />
        ))}
      </PointsWrapper>
      <Inner>
        <Icon>
          <LightningIcon />
        </Icon>
        {text || children}
      </Inner>
    </StyledCreditsButton>
  );
}; 