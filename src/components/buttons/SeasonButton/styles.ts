import styled, { css } from 'styled-components';
import { ThemeColors } from '../../theme';
import { SeasonVariant } from './index';

const winterStyles = css`
  color: #0011ff;
  background-color: #f8f8fd;
  border: 6px solid #8b93f8;
  box-shadow: 0px 8px #1f35ff;

  &:active {
    top: 8px;
    border: 6px solid #646fff;
    box-shadow: 0px 0px;
  }
`;

const summerStyles = css`
  color: #ffaf02;
  background-color: #ffffe3;
  border: 6px solid rgb(247, 169, 133);
  box-shadow: 0px 8px #f32b11;

  &:active {
    top: 8px;
    border: 6px solid #ffb764;
    box-shadow: 0px 0px;
  }
`;

export const StyledSeasonButton = styled.button<{ theme: ThemeColors; variant: SeasonVariant }>`
  cursor: pointer;
  font-size: large;
  font-family: inherit;
  font-weight: bold;
  padding: 0.8em 2.2em;
  border-radius: 50em;
  position: relative;
  transition: all 0.2s ease;

  ${({ variant }) => variant === 'winter' ? winterStyles : summerStyles}
`; 