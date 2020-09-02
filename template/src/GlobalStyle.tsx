import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(p) => p.theme.color.white};
    color: ${(p) => p.theme.color.black};

    @media screen and (prefers-color-scheme: dark) {
      background: ${(p) => p.theme.color.black};
      color: ${(p) => p.theme.color.white};
    }
  }
`;

export default GlobalStyle;
