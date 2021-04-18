import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --white: #ccd6f6;
    --gray: #909090;
    --gray-dark: #909090aa;
    --red: #d52b1e;
    --red-dark: #d52b1eaa;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #202020;
  }

  ::-webkit-scrollbar-thumb {
    background: #333333;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--red-dark);
  }

    body {
    font-family: 'Play', sans-serif;
    background: #202020;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;
