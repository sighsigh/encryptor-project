import * as React from "react";

import { connect } from 'react-redux';
import { uploadFile } from './actions/fileActions';
import { encryptFile } from './actions/encryptActions';
import { FileDataInterface } from './interfaces';
import { EncryptedFileInterface } from './interfaces';

import Header from './components/Header';
import Hero from "./components/Hero";
import FileUploader from './components/FileUploader';
import FileDownloader from './components/FileDownloader';
import Loader from './components/Loader';
import Controls from './components/Controls';
import Footer from './components/Footer';

import { createGlobalStyle } from 'styled-components';
import { ThemeProvider, theme } from "./theme";

import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.colors.dark)};
    box-sizing: border-box;
    color: ${props => (props.theme.colors.dark)};
    font-family: ${props => (props.theme.font.family)};
    font-weight: 300;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
`;

interface Props {
  uploadFile: (fileData: FileDataInterface) => void,
  encryptFile: (fileData: FileDataInterface) => void,
  fileData: FileDataInterface,
  encryptedFile: EncryptedFileInterface,
  isEncryptingProgress: boolean,
  isEncryptingDone: boolean,
}

const App: React.FC<Props> = props => {
  const {
    uploadFile,
    encryptFile,
    fileData,
    encryptedFile,
    isEncryptingProgress,
    isEncryptingDone
  } = props;

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

        {isEncryptingProgress
          ? (
            <div className='loader'>
              <Loader />
            </div>
          )
          : (
            <>
              {
                isEncryptingDone
                  ? (
                      <div className='downloader'>
                        <FileDownloader />
                      </div>
                  )
                  :
                  (
                    <div className='uploader'>
                      <FileUploader
                        onUpload={uploadFile}
                      />
                      <Controls
                        onEncryptClick={() => encryptFile(fileData)}
                        onDecryptClick={() => {}}
                      />
                    </div>
                  )
              }
            </>
          )
        }

      </section>

      <footer>
        <Footer />
      </footer>

    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  fileData: state.file.data,
  encryptedFile: state.encrypt.encryptedFile,
  isEncryptingProgress: state.encrypt.isEncryptingProgress,
  isEncryptingDone: state.encrypt.isEncryptingDone,
})

const mapDispatchToProps = dispatch => ({
  uploadFile: (fileData: FileDataInterface) => dispatch(uploadFile(fileData)),
  encryptFile: (fileData: FileDataInterface) => dispatch(encryptFile(fileData))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
