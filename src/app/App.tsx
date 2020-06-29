import * as React from "react";

import Header from './components/Header';
import Toggle from "./components/Toggle";

import { createGlobalStyle } from 'styled-components';
import { ThemeProvider, theme } from "./theme";
// import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.colors.dark)};
    color: ${props => (props.theme.colors.white)};
    font-family: ${props => (props.theme.font.family)};
    font-weight: 300;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />


    </ThemeProvider>
  );
};

export default App;
