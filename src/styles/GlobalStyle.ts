import { createGlobalStyle, } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Minimal reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

    html {
    height: 100%;
  }

  body {
    height: 100%;
    min-height: 100dvh;
  }
    #root {
    height: 100%;
    }

  `

