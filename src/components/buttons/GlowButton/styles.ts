import styled from 'styled-components';
import { ThemeColors } from '../../theme';

export const StyledGlowButton = styled.button<{ theme: ThemeColors }>`
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: none;
  border-bottom: 4px solid ${({ theme }) => theme.accent};
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  box-shadow: 
    0 4px 6px -1px ${({ theme }) => `${theme.accent}20`},
    0 0 10px ${({ theme }) => `${theme.accent}40`};
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 0.7rem;
    background: ${({ theme }) => theme.accent};
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.surface};
    transition: background 0.2s ease;
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    filter: brightness(110%);
    transform: translateY(-1px);
    border-bottom-width: 6px;
    box-shadow: 
      0 10px 15px -3px ${({ theme }) => `${theme.accent}30`},
      0 4px 6px -4px ${({ theme }) => `${theme.accent}20`},
      0 0 20px ${({ theme }) => `${theme.accent}60`},
      0 0 40px ${({ theme }) => `${theme.accent}40`};

    &::before {
      opacity: 0.4;
    }
  }

  &:active {
    filter: brightness(90%);
    transform: translateY(2px);
    border-bottom-width: 2px;
    box-shadow: 
      0 0 15px ${({ theme }) => `${theme.accent}40`};

    &::before {
      opacity: 0.2;
    }
  }
`; 