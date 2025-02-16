import styled from 'styled-components';

export const JavaIcon = styled.div`
  transition: all 0.5s ease;
  z-index: 2;

  svg {
    display: block;
  }
`;

export const NowText = styled.span`
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  z-index: 2;
`;

export const PlayText = styled.span`
  transition: all 0.5s ease;
  transition-delay: 300ms;
`;

export const StyledJavaButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;
  color: white;
  text-shadow: 2px 2px rgb(116, 116, 116);
  text-transform: uppercase;
  cursor: pointer;
  border: solid 2px black;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 17px;
  background-color: hsl(49deg 98% 60%);
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;

  &:active {
    transform: scale(0.9);
    transition: all 100ms ease;
  }

  &:hover ${JavaIcon} {
    transform: scale(3) translate(50%);
  }

  &:hover ${NowText} {
    transform: translateX(10px);
    transition-delay: 300ms;
  }

  &:hover ${PlayText} {
    transform: translateX(200%);
    transition-delay: 300ms;
  }
`; 