import * as React from "react";

import Header from './components/Header';
import Hero from "./components/Hero";
import FileUploader from './components/FileUploader';
import Footer from './components/Footer';

import { createGlobalStyle } from 'styled-components';
import { ThemeProvider, theme } from "./theme";

import './App.css';

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

      <section className='main'>
        <div className='header'>
          <Header />
        </div>

        <div className='hero'>
          <Hero />
        </div>

        <div className="uploader">
          <FileUploader />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>

    </ThemeProvider>
  );
};

export default App;
