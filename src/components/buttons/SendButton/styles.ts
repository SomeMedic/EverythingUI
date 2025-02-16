import styled from 'styled-components';
import { ThemeColors } from '../../theme';

export const SvgWrapper1 = styled.div``;

export const SendIcon = styled.div`
  svg {
    width: 18px;
    height: 18px;
    fill: white;
    transition: all 0.3s;
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
`;

export const ButtonText = styled.span`
  display: block;
  margin-left: 0.4em;
  transition: all 0.3s;
`;

export const StyledSendButton = styled.button<{ theme: ThemeColors }>`
  font-family: inherit;
  font-size: 18px;
  background: linear-gradient(to bottom, #4dc7d9 0%, #66a6ff 100%);
  color: white;
  padding: 0.8em 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    padding: 0em;
    background: linear-gradient(to bottom, #5bd9ec 0%, #97c3ff 100%);
    cursor: pointer;

    ${ButtonText} {
      scale: 0;
      font-size: 0%;
      opacity: 0;
      transition: all 0.5s;
    }

    ${SvgWrapper} {
      background-color: rgba(43, 169, 228, 0.897);
      width: 54px;
      height: 54px;
    }

    ${SendIcon} svg {
      width: 25px;
      height: 25px;
      margin-right: 5px;
      transform: rotate(45deg);
    }
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
`; 