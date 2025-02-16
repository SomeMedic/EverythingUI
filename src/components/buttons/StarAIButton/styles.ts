import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledStarAIButton = styled.button`
  --icon-animation: ${pulse} 2s ease-in-out infinite;
  --text-scale: 1;
  
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background: linear-gradient(45deg, #FF1B6B, #45CAFF);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    --icon-animation: ${rotate} 4s linear infinite;
    --text-scale: 1.05;
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #FF1B6B80, #45CAFF80);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const StarIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: currentColor;
  transition: transform 0.3s ease;
  animation: var(--icon-animation);
`;

export const ButtonText = styled.span`
  transition: transform 0.3s ease;
  font-weight: 600;
  transform: scale(var(--text-scale));
`; 