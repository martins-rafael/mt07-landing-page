import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --white-01: #ccd6f6;
    --white-02: #c9d1d9;
    --gray-01: #909090;
    --gray-02: #404040;
    --gray-03: #333333;
    --gray-04: #202020;
    --black-01: #101010;
    --black-02: #000000;
    --red-01: #d52b1e;
    --red-02: #99281f;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-04);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-03);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--red-02);
  }

  body {
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--gray-04);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Play', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
