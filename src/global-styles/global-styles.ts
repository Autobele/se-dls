import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Roboto';
      src: url('https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2') format('woff2');
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto';
    margin: 0;
  }

  
`