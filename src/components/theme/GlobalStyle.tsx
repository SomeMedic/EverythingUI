'use client';

import { createGlobalStyle } from 'styled-components';
import { GlobalKeyframes } from '@/components/buttons/SparkleButton/styles';
import { ThemeColors } from './index';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeColors }>`
  ${GlobalKeyframes}

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
  }

  * {
    box-sizing: border-box;
  }

  code {
    font-family: 'Fira Code', 'Consolas', monospace;
  }

  /* Подсветка синтаксиса */
  .keyword {
    color: #C678DD;
  }

  .function {
    color: #61AFEF;
  }

  .string {
    color: #98C379;
  }

  .component {
    color: #E5C07B;
  }

  .punctuation {
    color: #ABB2BF;
  }

  .operator {
    color: #56B6C2;
  }
`; 