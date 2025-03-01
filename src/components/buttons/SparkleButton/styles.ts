'use client';

import styled, { css } from 'styled-components';
import { ThemeColors } from '../../theme';

export const SparkleButtonContainer = styled.div`
  position: relative;
  --transition: 0.3s;
  --spark: 1.2s;
  --cut: 0.1em;
`;

export const StyledSparkleButton = styled.button<{ theme: ThemeColors }>`
  --active: 0;
  --bg: radial-gradient(
      40% 50% at center 100%,
      hsl(270 calc(var(--active) * 97%) 72% / var(--active)),
      transparent
    ),
    radial-gradient(
      80% 100% at center 120%,
      hsl(260 calc(var(--active) * 97%) 70% / var(--active)),
      transparent
    ),
    hsl(260 calc(var(--active) * 97%) calc((var(--active) * 44%) + 12%));
  
  background: var(--bg);
  font-size: 1.2rem;
  font-weight: 500;
  border: 0;
  cursor: pointer;
  padding: 1em 1em;
  display: flex;
  align-items: center;
  gap: 0.25em;
  white-space: nowrap;
  border-radius: 100px;
  position: relative;
  box-shadow: 0 0 calc(var(--active) * 3em) calc(var(--active) * 1em) hsl(260 97% 61% / 0.75),
    0 0em 0 0 hsl(260 calc(var(--active) * 97%) calc((var(--active) * 50%) + 30%)) inset,
    0 -0.05em 0 0 hsl(260 calc(var(--active) * 97%) calc(var(--active) * 60%)) inset;
  transition: box-shadow var(--transition), scale var(--transition), background var(--transition);
  scale: calc(1 + (var(--active) * 0.1));
  transition: .3s;

  &:active {
    scale: 1;
    transition: .3s;
  }

  &:before {
    content: "";
    position: absolute;
    inset: -0.2em;
    z-index: -1;
    border: 0.25em solid hsl(260 97% 50% / 0.5);
    border-radius: 100px;
    opacity: var(--active, 0);
    transition: opacity var(--transition);
  }

  .spark {
    position: absolute;
    inset: 0;
    border-radius: 100px;
    rotate: 0deg;
    overflow: hidden;
    mask: linear-gradient(white, transparent 50%);
    animation: flip calc(var(--spark) * 2) infinite steps(2, end);
  }

  .spark:before {
    content: "";
    position: absolute;
    width: 200%;
    aspect-ratio: 1;
    top: 0%;
    left: 50%;
    z-index: -1;
    translate: -50% -15%;
    rotate: 0;
    transform: rotate(-90deg);
    opacity: calc((var(--active)) + 0.4);
    background: conic-gradient(
      from 0deg,
      transparent 0 340deg,
      white 360deg
    );
    transition: opacity var(--transition);
    animation: rotate var(--spark) linear infinite both;
  }

  .spark:after {
    content: "";
    position: absolute;
    inset: var(--cut);
    border-radius: 100px;
  }

  .backdrop {
    position: absolute;
    inset: var(--cut);
    background: var(--bg);
    border-radius: 100px;
    transition: background var(--transition);
  }

  &:is(:hover, :focus-visible) {
    --active: 1;
    --play-state: running;
  }

  &:is(:hover, :focus-visible) ~ :is(.bodydrop, .particle-pen) {
    --active: 1;
    --play-state: running;
  }
`;

export const Text = styled.span`
  translate: 2% -6%;
  letter-spacing: 0.01ch;
  background: linear-gradient(90deg, 
    hsl(0 0% calc((var(--active) * 100%) + 65%)), 
    hsl(0 0% calc((var(--active) * 100%) + 26%))
  );
  -webkit-background-clip: text;
  color: transparent;
  transition: background var(--transition);
`;

export const SparkSVG = styled.svg`
  inline-size: 1.25em;
  translate: -25% -5%;

  path {
    color: hsl(0 0% calc((var(--active, 0) * 70%) + var(--base)));
    transform-box: fill-box;
    transform-origin: center;
    fill: currentColor;
    stroke: currentColor;
    animation-delay: calc((var(--transition) * 1.5) + (var(--delay) * 1s));
    animation-duration: 0.6s;
    transition: color var(--transition);
  }

  ${StyledSparkleButton}:is(:hover, :focus-visible) & path {
    animation-name: bounce;
  }

  & path:nth-of-type(1) {
    --scale: 0.5;
    --delay: 0.1;
    --base: 40%;
  }

  & path:nth-of-type(2) {
    --scale: 1.5;
    --delay: 0.2;
    --base: 20%;
  }

  & path:nth-of-type(3) {
    --scale: 2.5;
    --delay: 0.35;
    --base: 30%;
  }
`;

export const ParticlePen = styled.span`
  position: absolute;
  width: 200%;
  aspect-ratio: 1;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  -webkit-mask: radial-gradient(white, transparent 65%);
  z-index: -1;
  opacity: var(--active, 0);
  transition: opacity var(--transition);
`;

export const Particle = styled.svg`
  fill: white;
  width: calc(var(--size, 0.25) * 1rem);
  aspect-ratio: 1;
  position: absolute;
  top: calc(var(--y, 50) * 1%);
  left: calc(var(--x, 50) * 1%);
  opacity: var(--alpha, 1);
  animation: float-out calc(var(--duration, 1) * 1s) calc(var(--delay, 0) * -1s) infinite linear;
  transform-origin: var(--origin-x, 1000%) var(--origin-y, 1000%);
  z-index: -1;
  animation-play-state: var(--play-state, paused);

  &:nth-of-type(even) {
    animation-direction: reverse;
  }

  path {
    fill: hsl(0 0% 90%);
    stroke: none;
  }
`;

const keyframes = css`
  @keyframes bounce {
    35%, 65% {
      scale: var(--scale);
    }
  }

  @keyframes float-out {
    to {
      rotate: 360deg;
    }
  }

  @keyframes flip {
    to {
      rotate: 360deg;
    }
  }

  @keyframes rotate {
    to {
      transform: rotate(90deg);
    }
  }
`;

export const GlobalKeyframes = css`
  ${keyframes}
`; 