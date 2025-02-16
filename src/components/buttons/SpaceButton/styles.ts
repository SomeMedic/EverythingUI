import styled, { keyframes, css } from 'styled-components';
import { SpaceButtonVariant } from './index';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const orbit = keyframes`
  from {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
`;

const animStar = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-135rem);
  }
`;

const animStarRotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
`;

const getVariantStyles = (variant: SpaceButtonVariant) => {
  switch (variant) {
    case 'golden':
      return css`
        background-image: linear-gradient(#212121, #212121),
          linear-gradient(137.48deg, #ffdb3b 10%, #ff9b17d7 45%, #f9ff41 67%, #feb200d7 87%);
        &:active {
          border: double 4px #feb200d7;
          .circle {
            background: #feb200d7;
          }
        }
      `;
    case 'dark':
      return css`
        background-image: linear-gradient(#161a25, #161a25),
          linear-gradient(137.48deg, #f5434f 10%, #631e29 45%, #000000 67%, #161a25 87%);
        font-family: "Orbitron", sans-serif;
        &:active {
          border: double 4px #631e29;
          .circle {
            background: #631e29;
          }
        }
      `;
    default:
      return css`
        background-image: linear-gradient(#212121, #212121),
          linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%);
        &:active {
          border: double 4px #fe53bb;
          .circle {
            background: #fe53bb;
          }
        }
      `;
  }
};

const getTextStyles = (variant: SpaceButtonVariant) => {
  switch (variant) {
    case 'golden':
      return css`
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        letter-spacing: 3px;
        text-shadow: 0 0 4px rgb(0, 0, 0);
      `;
    case 'dark':
      return css`
        font-family: "Orbitron", sans-serif;
        font-size: 12px;
        letter-spacing: 5px;
      `;
    default:
      return css`
        font-size: 12px;
        letter-spacing: 5px;
      `;
  }
};

const getCircleStyles = (variant: SpaceButtonVariant, type: 'first' | 'second') => {
  switch (variant) {
    case 'golden':
      return css`
        background: rgba(0, 0, 186, 0.936);
      `;
    case 'dark':
      return css`
        background: ${type === 'first' 
          ? 'rgba(245, 67, 79, 0.636)' 
          : 'rgba(99, 30, 41, 0.704)'};
        animation: ${orbit} ${type === 'first' ? '8s' : '10s'} linear infinite;
      `;
    default:
      return css`
        background: ${type === 'first' 
          ? 'rgba(254, 83, 186, 0.636)' 
          : 'rgba(142, 81, 234, 0.704)'};
      `;
  }
};

export const StyledText = styled.strong<{ variant: SpaceButtonVariant }>`
  z-index: 2;
  color: #ffffff;
  text-shadow: 0 0 4px white;
  ${({ variant }) => getTextStyles(variant)}
`;

export const Stars = styled.div`
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;

  &::after {
    content: "";
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: ${animStarRotate} 90s linear infinite;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: ${animStar} 60s linear infinite;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }
`;

export const ContainerStars = styled.div<{ variant: SpaceButtonVariant }>`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
`;

export const Circle = styled.div<{ $type: 'first' | 'second'; variant: SpaceButtonVariant }>`
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: ${pulse} 4s infinite;
  z-index: -1;
  ${({ variant, $type }) => getCircleStyles(variant, $type)}
`;

export const Glow = styled.div`
  position: absolute;
  display: flex;
  width: 12rem;
`;

export const StyledSpaceButton = styled.button<{ variant: SpaceButtonVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  overflow: hidden;
  height: 3rem;
  background-size: 300% 300%;
  cursor: pointer;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: ${gradient} 5s ease infinite;
  border: double 4px transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
  ${({ variant }) => getVariantStyles(variant)}

  &:hover {
    transform: scale(1.1);

    ${ContainerStars} {
      z-index: 1;
      background-color: ${({ variant }) => variant === 'dark' ? '#161a25' : '#212121'};
    }
  }
`; 