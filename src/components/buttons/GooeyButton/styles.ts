import styled from 'styled-components';
import { ThemeColors } from '../../theme';

export const Blobs = styled.div`
  height: 100%;
  filter: url(#goo);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: -3px;
  right: -1px;
  z-index: -1;
`;

export const Blob = styled.div`
  background-color: ${({ theme }) => theme.accent};
  width: 34%;
  height: 100%;
  border-radius: 100%;
  position: absolute;
  transform: scale(1.4) translateY(125%) translateZ(0);
  transition: all 700ms ease;

  &:nth-child(1) {
    left: -5%;
  }

  &:nth-child(2) {
    left: 30%;
    transition-delay: 60ms;
  }

  &:nth-child(3) {
    left: 66%;
    transition-delay: 25ms;
  }
`;

export const StyledGooeyButton = styled.button<{ theme: ThemeColors }>`
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  padding: 0.9em 1.6em;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 4px solid ${({ theme }) => theme.accent};
  border-radius: 0;
  transition: all 700ms ease;
  background: transparent;

  &:hover {
    color: ${({ theme }) => theme.background};
  }

  &:hover ${Blobs} div {
    transform: scale(1.4) translateY(0) translateZ(0);
  }
`; 