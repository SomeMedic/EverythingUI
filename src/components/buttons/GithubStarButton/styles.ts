import styled, { keyframes } from 'styled-components';
import { ThemeColors } from '../../theme';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const StyledGithubStarButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  background: linear-gradient(
    90deg,
    #FF416C,
    #FF4B2B,
    #F15F79,
    #7F7FD5,
    #86A8E7,
    #91EAE4
  );
  background-size: 300% 300%;
  animation: ${gradientAnimation} 15s ease infinite;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    z-index: -1;
    background: inherit;
    border-radius: inherit;
    filter: blur(8px);
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    background-size: 200% 200%;
    animation: ${gradientAnimation} 8s ease infinite;
    
    &::before {
      opacity: 0.8;
    }
  }

  &:active {
    transform: translateY(1px) scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .gap-1 {
    gap: 4px;
  }

  .ml-1 {
    margin-left: 4px;
  }

  .ml-2 {
    margin-left: 8px;
  }

  .p-1 {
    padding: 4px;
  }

  .text-sm {
    font-size: 14px;
  }

  .text-white {
    color: #fff;
  }

  .tracking-wider {
    letter-spacing: 0.05em;
  }

  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }

  .font-medium {
    font-weight: 500;
  }

  .inline-block {
    display: inline-block;
  }
`;

export const GithubIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  fill: currentColor;
  color: white;
  transition: transform 0.2s ease-in-out;

  ${StyledGithubStarButton}:hover & {
    transform: rotate(-5deg);
  }
`;

export const StarIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  fill: currentColor;
  color: #FFD700;
  transition: transform 0.2s ease-in-out;

  ${StyledGithubStarButton}:hover & {
    transform: scale(1.2) rotate(15deg);
  }
`; 