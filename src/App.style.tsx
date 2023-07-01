import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<DefaultTheme>`
body {
  font-family: 'Roboto', sans-serif;
}
#root {
  margin: 0 auto;
  height: 100dvh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows:  auto 80px;
  grid-template-areas:
    "sidebar main main main main"
    "player player player player player";

    @media (width < 768px) {
       grid-template-areas:
    "main main main main main"
    "player player player player player";
    }
}
`;
