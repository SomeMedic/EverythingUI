import styled, { keyframes } from 'styled-components';
import { ThemeColors } from '../../theme';

const floatingPoints = keyframes`
  0% {
    transform: translateY(0);
  }
  85% {
    opacity: 0;
  }
  100% {
    transform: translateY(-55px);
    opacity: 0;
  }
`;

const dasharray = keyframes`
  from {
    stroke-dasharray: 0 0 0 0;
  }
  to {
    stroke-dasharray: 68 68 0 0;
  }
`;

const filled = keyframes`
  to {
    fill: white;
  }
`;

export const Fold = styled.span`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  height: 1rem;
  width: 1rem;
  display: inline-block;
  transition: all 0.5s ease-in-out;
  background: radial-gradient(
    100% 75% at 55%,
    rgba(223, 113, 255, 0.8) 0%,
    rgba(223, 113, 255, 0) 100%
  );
  box-shadow: 0 0 3px black;
  border-bottom-left-radius: 0.5rem;
  border-top-right-radius: 0.75rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150%;
    height: 150%;
    transform: rotate(45deg) translateX(0%) translateY(-18px);
    background-color: #e8e8e8;
    pointer-events: none;
  }
`;

export const PointsWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: absolute;
  z-index: 1;
`;

export const Point = styled.i<{ $index: number }>`
  bottom: -10px;
  position: absolute;
  animation: ${floatingPoints} infinite ease-in-out;
  pointer-events: none;
  width: 2px;
  height: 2px;
  background-color: #fff;
  border-radius: 9999px;
  left: ${({ $index }) => {
    const positions = [10, 30, 25, 44, 50, 75, 88, 58, 98, 65];
    return `${positions[$index]}%`;
  }};
  opacity: ${({ $index }) => {
    const opacities = [1, 0.7, 0.8, 0.6, 1, 0.5, 0.9, 0.8, 0.6, 1];
    return opacities[$index];
  }};
  animation-duration: ${({ $index }) => {
    const durations = [2.35, 2.5, 2.2, 2.05, 1.9, 1.5, 2.2, 2.25, 2.6, 2.5];
    return `${durations[$index]}s`;
  }};
  animation-delay: ${({ $index }) => {
    const delays = [0.2, 0.5, 0.1, 0, 0, 1.5, 0.2, 0.2, 0.1, 0.2];
    return `${delays[$index]}s`;
  }};
`;

export const Inner = styled.span`
  z-index: 2;
  gap: 6px;
  position: relative;
  width: 100%;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  transition: color 0.2s ease-in-out;
`;

export const Icon = styled.span`
  svg {
    width: 18px;
    height: 18px;
    transition: fill 0.1s linear;
  }
`;

export const StyledCreditsButton = styled.button<{ theme: ThemeColors }>`
  --h-button: 48px;
  --w-button: 102px;
  --round: 0.75rem;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.25s ease;
  background: radial-gradient(
      65.28% 65.28% at 50% 100%,
      rgba(223, 113, 255, 0.8) 0%,
      rgba(223, 113, 255, 0) 100%
    ),
    linear-gradient(0deg, #7a5af8, #7a5af8);
  border-radius: var(--round);
  border: none;
  outline: none;
  padding: 12px 18px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: var(--space);
    transition: all 0.5s ease-in-out;
    border-radius: calc(var(--round) - var(--space));
    z-index: 0;
  }

  &::before {
    --space: 1px;
    background: linear-gradient(
      177.95deg,
      rgba(255, 255, 255, 0.19) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::after {
    --space: 2px;
    background: radial-gradient(
        65.28% 65.28% at 50% 100%,
        rgba(223, 113, 255, 0.8) 0%,
        rgba(223, 113, 255, 0) 100%
      ),
      linear-gradient(0deg, #7a5af8, #7a5af8);
  }

  &:active {
    transform: scale(0.95);
  }

  &:hover ${Fold} {
    margin-top: -1rem;
    margin-right: -1rem;
  }

  &:focus ${Icon} svg {
    fill: white;
  }

  &:hover ${Icon} svg {
    fill: transparent;
    animation:
      ${dasharray} 1s linear forwards,
      ${filled} 0.1s linear forwards 0.95s;
  }
`; 