import styled, { keyframes } from 'styled-components';
import { ThemeColors } from '../../theme';

const speen = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: relative;
  filter: drop-shadow(0 0 0.5em #f503) drop-shadow(0 0 2em #05f3);
`;

export const ButtonBorder = styled.div`
  padding: 3px;
  background: linear-gradient(90deg, #f50, #05f);
  border-radius: 30px;
  box-shadow: 0 0 0.5em #f503, 0 0 2em #05f3;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #f50, #05f);
    animation: ${speen} 4s linear infinite;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 27px;
  width: 120px;
  height: 60px;
  background: #111215;
  color: #fff;
  font-size: 16px;
`;

export const RealButton = styled.button`
  position: absolute;
  width: 126px;
  height: 66px;
  z-index: 10;
  outline: none;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  opacity: 0;
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: -9900%;
  background: radial-gradient(
    circle at 50% 50%,
    #0000 0,
    #0000 20%,
    #111111aa 50%
  );
  background-size: 3px 3px;
  z-index: 0;
  pointer-events: none;
`;

const SpinBase = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0.5;
  overflow: hidden;
  transition: 0.3s;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    inset: -150%;
    animation: ${speen} 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite,
      ${speen} 4s linear infinite;
    animation-play-state: paused;
    pointer-events: none;
  }

  ${RealButton}:hover ~ div &::before {
    animation-play-state: running;
  }

  ${RealButton}:active ~ div & {
    opacity: 1;
  }
`;

export const SpinBlur = styled(SpinBase)`
  filter: blur(2em) url(#unopaq);

  &::before {
    background: linear-gradient(90deg, #f50 30%, #0000 50%, #05f 70%);
  }
`;

export const SpinIntense = styled(SpinBase)`
  inset: -0.125em;
  filter: blur(0.25em) url(#unopaq2);
  border-radius: 0.75em;

  &::before {
    background: linear-gradient(90deg, #f95 20%, #0000 45% 55%, #59f 80%);
  }
`;

export const SpinInside = styled(SpinBase)`
  inset: -2px;
  border-radius: inherit;
  filter: blur(2px) url(#unopaq3);
  z-index: 0;

  &::before {
    background: linear-gradient(90deg, #fc9 30%, #0000 45% 55%, #9cf 70%);
  }
`; 