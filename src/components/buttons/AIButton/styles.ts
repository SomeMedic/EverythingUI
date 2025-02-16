import styled, { keyframes } from 'styled-components';
import { AIButtonVariant } from './index';

const spin = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const getBackgroundColor = (variant: AIButtonVariant) => {
  switch (variant) {
    case 'openai':
      return '#10A37F';
    case 'claude':
      return '#CC9B7A';
    case 'gemini':
      return 'linear-gradient(135deg, #f3550d 0%, #7a5af8 100%)';
    case 'deepseek':
      return '#4D6BFE';
    default:
      return '#10A37F';
  }
};

const getHoverBackgroundColor = (variant: AIButtonVariant) => {
  switch (variant) {
    case 'openai':
      return '#0F916F';
    case 'claude':
      return '#B88B6A';
    case 'gemini':
      return 'linear-gradient(135deg, #9b4ff0 0%, #0254fc 100%)';
    case 'deepseek':
      return '#2D4BDE';
    default:
      return '#0F916F';
  }
};

const getTextColor = (variant: AIButtonVariant) => {
  switch (variant) {
    case 'openai':
    case 'deepseek':
      return '#d3d3d3';
    case 'gemini':
      return '#ffffff';
    case 'claude':
      return '#000000';
    default:
      return '#d3d3d3';
  }
};

const getAccentTextColor = (variant: AIButtonVariant) => {
  switch (variant) {
    case 'openai':
      return '#d6cbbf';
    case 'claude':
      return '#61410a';
    case 'gemini':
      return '#ffffff';
    case 'deepseek':
      return '#B4C0FF';
    default:
      return '#d6cbbf';
  }
};

export const Logo = styled.div<{ variant: AIButtonVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 90px;
  height: 90px;
  border-radius: ${({ variant }) => {
    switch (variant) {
      case 'openai':
        return '50%';
      case 'claude':
        return '30%';
      case 'gemini':
        return '0';
      case 'deepseek':
        return '20%';
      default:
        return '50%';
    }
  }};
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: ${({ variant }) => variant === 'openai' ? '#0f1715' : 'transparent'};

  .ai-icon {
    width: ${({ variant }) => variant === 'gemini' ? '120px' : '54px'};
    height: ${({ variant }) => variant === 'gemini' ? '44px' : '54px'};
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: ${({ variant }) => variant === 'gemini' ? '#FFFFFF' : 'currentColor'};
  }
`;

export const ButtonText = styled.div<{ variant: AIButtonVariant }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  z-index: 2;
  position: absolute;
  bottom: 18px;
  left: 0;
  right: 0;

  span:first-child {
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 2px;
  }

  span:last-child {
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }
`;

export const StyledAIButton = styled.button<{ variant: AIButtonVariant }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #000000;
  border-radius: 12px;
  padding: 0;
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  position: relative;
  box-shadow: 4px 4px 0px #000000;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 130px;
  width: 130px;
  cursor: pointer;
  background: ${({ variant }) => getBackgroundColor(variant)};

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -150%;
    width: 300%;
    height: 300%;
    border-radius: 50%;
    transform: translateX(-50%) scale(0);
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 1;
    background: ${({ variant }) => getHoverBackgroundColor(variant)};
  }

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 8px 8px 0px #000000;

    &::before {
      transform: translateX(-50%) scale(1);
    }

    ${Logo} {
      animation: ${spin} 5s linear infinite;
      width: ${({ variant }) => variant === 'gemini' ? '100px' : '50px'};
      height: ${({ variant }) => variant === 'gemini' ? '37px' : '50px'};
      top: 28%;

      .ai-icon {
        transform: scale(${({ variant }) => variant === 'gemini' ? 0.8 : 0.6});
      }
    }

    ${ButtonText} {
      opacity: 1;
      transform: translateY(0);
      color: ${({ variant }) => getTextColor(variant)};

      span:last-child {
        color: ${({ variant }) => getAccentTextColor(variant)};
      }
    }
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translate(-4px, -4px);
      box-shadow: 8px 8px 0px #000000;
    }
  }
`; 