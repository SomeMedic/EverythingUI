import styled, { keyframes } from 'styled-components';
import { ThemeColors } from '../../theme';

const glitchAnimation = keyframes`
  25% {
    background-color: #FF0000;
    transform: translateX(-10px);
    letter-spacing: 10px;
    box-shadow: 0 0 10px #FF0000;
  }

  35% {
    background-color: #00FF00;
    transform: translate(10px);
    box-shadow: 0 0 15px #00FF00;
  }

  59% {
    opacity: 0.8;
  }

  60% {
    background-color: #0000FF;
    transform: translate(-10px);
    filter: blur(5px);
    box-shadow: 0 0 20px #0000FF;
  }

  100% {
    background-color: #FFFF00;
    filter: blur(0);
    box-shadow: 0 0 25px #FFFF00;
  }
`;

const blinkAnimation = keyframes`
  50% {
    opacity: 0;
  }
`;

export const StyledGlitchButton = styled.button<{ theme: ThemeColors }>`
  display: inline-block;
  font-family: 'Fira Code', monospace;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  padding: 10px 13px;
  min-width: 175px;
  line-height: 1.5em;
  white-space: nowrap;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 15px;
  background: transparent;
  position: relative;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    animation: ${glitchAnimation} 0.2s forwards;
    color: ${({ theme }) => theme.background};
    border-color: #FFFF00;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  &:active {
    background: none;
    color: #FFFF00;
    border-color: #FFFF00;
    box-shadow: 0 0 15px #FFFF00;
  }
`;

export const Text = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
`;

export const TextDecoration = styled.span`
  display: inline-block;
  margin-left: 4px;
  position: relative;
  z-index: 1;

  ${StyledGlitchButton}:hover &,
  ${StyledGlitchButton}:focus & {
    animation: ${blinkAnimation} 0.1s infinite;
  }

  ${StyledGlitchButton}:active & {
    animation: none;
  }
`;

export const Decoration = styled.span`
  display: inline-block;
  float: right;
  margin-left: 8px;
  position: relative;
  z-index: 1;

  ${StyledGlitchButton}:hover &,
  ${StyledGlitchButton}:focus & {
    animation: ${blinkAnimation} 0.1s infinite;
  }

  ${StyledGlitchButton}:active & {
    animation: none;
  }
`; 