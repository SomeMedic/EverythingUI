import styled from 'styled-components';
import { ThemeColors } from '../../theme';

export const StyledFloatingButton = styled.button<{ theme: ThemeColors }>`
  width: 130px;
  height: 40px;
  font-size: 1.1em;
  cursor: pointer;
  background-color: #171717;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: all 0.4s;

  &:hover {
    border-radius: 5px;
    transform: translateY(-10px);
    box-shadow: 0 7px 0 -2px #f85959,
      0 15px 0 -4px #39a2db,
      0 16px 10px -3px #39a2db;
  }

  &:active {
    transition: all 0.2s;
    transform: translateY(-5px);
    box-shadow: 0 2px 0 -2px #f85959,
      0 8px 0 -4px #39a2db,
      0 12px 10px -3px #39a2db;
  }
`; 