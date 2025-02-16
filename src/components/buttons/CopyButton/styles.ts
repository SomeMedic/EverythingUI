import styled, { keyframes } from 'styled-components';
import { ThemeColors } from '../../theme';

const pressAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  to {
    transform: scale(1);
  }
`;

const bounceAnimation = keyframes`
  50% {
    transform: rotate(5deg) translate(20px, -50px);
  }

  to {
    transform: scale(0.9) rotate(10deg) translate(50px, -80px);
    opacity: 0;
  }
`;

export const StyledCopyButton = styled.button<{ theme: ThemeColors }>`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 15px;
  box-shadow: 20px 20px 15px 0 #ababab4d;
  cursor: pointer;
  border: none;
  padding: 0;
  position: relative;

  .icon-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 50px;
      height: auto;

      &:last-child {
        position: absolute;
      }
    }
  }

  .text {
    color: #666;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    user-select: none;
  }

  &:active {
    animation: ${pressAnimation} 0.2s 1 linear;

    .icon-container svg:last-child {
      animation: ${bounceAnimation} 0.2s 1 linear;
    }
  }
`; 