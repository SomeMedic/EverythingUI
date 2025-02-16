import styled, { keyframes, css } from 'styled-components';
import { ThemeColors } from '../../theme';

const slideRight = keyframes`
  0% {
    transform: translateX(-10px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideRightInfinite = keyframes`
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-5px);
  }
`;

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

export const Arrow = styled.div`
  position: absolute;
  right: 0;
  width: 30px;
  height: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Counter = styled.div`
  position: absolute;
  left: -5px;
  top: -5px;
  background: rgb(194, 3, 3);
  color: white;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`;

export const StyledNotificationButton = styled.button<{ theme: ThemeColors; variant?: string }>`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 0px 15px;
  background-color: rgb(66, 66, 66);
  border-radius: 10px;
  color: white;
  border: none;
  position: relative;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgb(77, 77, 77);
    transition-duration: 0.2s;

    ${Arrow} {
      animation: ${({ variant }) => 
        variant === 'withPulse' 
          ? css`${slideRightInfinite} 1s infinite` 
          : css`${slideRight} 0.6s ease-out both`};
    }
  }

  &:active {
    transform: translate(1px, 1px);
    transition-duration: 0.2s;
  }
`;

export const BellIcon = styled.svg<{ bellColor: string; variant?: string }>`
  width: 13px;
  ${({ variant }) => variant === 'withPulse' && css`
    animation: ${pulse} 2s infinite;
  `}

  path {
    fill: ${({ bellColor }) => bellColor};
  }
`;

export const Dot = styled.div<{ dotColor: string }>`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  background-color: ${({ dotColor }) => dotColor};
  border-radius: 100%;
`; 