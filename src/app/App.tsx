import * as React from "react";

import { connect } from 'react-redux';
import { uploadFile } from './actions/fileActions';
import { encryptFile } from './actions/encryptActions';
import {decryptFile,  enableDecryptMode } from './actions/decryptActions';
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
  decryptFile: (key: string) => void,
  enableDecryptMode: () => void,
  fileData: FileDataInterface,
  encryptedFile: EncryptedFileInterface,
  isEncryptingProgress: boolean,
  isEncryptingDone: boolean,
  isDecryptingProgress: boolean,
  isDecryptingModeOn: boolean
}

const App: React.FC<Props> = props => {
  const {
    uploadFile,
    encryptFile,
    decryptFile,
    enableDecryptMode,
    fileData,
    encryptedFile,
    isEncryptingProgress,
    isEncryptingDone,
    isDecryptingProgress,
    isDecryptingModeOn
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

        {(isEncryptingProgress || isDecryptingProgress)
          ? (
            <div className='loader'>
              <Loader />
            </div>
          )
          : (
            <>
              {
                (isEncryptingDone || isDecryptingModeOn)
                  ? (
                      <div className='downloader'>
                        <FileDownloader
                          onDecrypt={decryptFile}
                        />
                      </div>
                  )
                  :
                  (
                    <div className='uploader'>
                      <FileUploader
                        onUpload={uploadFile}
                      />
                      <div className="controls">
                        <Controls
                          onEncryptClick={() => encryptFile(fileData)}
                          onDecryptClick={enableDecryptMode}
                        />
                      </div>
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
  isEncryptingProgress: state.encrypt.isInProgress,
  isEncryptingDone: state.encrypt.isDone,
  isDecryptingModeOn: state.decrypt.isModeOn,
  isDecryptingProgress: state.decrypt.isInProgress,
});

const mapDispatchToProps = dispatch => ({
  uploadFile: (fileData: FileDataInterface) => dispatch(uploadFile(fileData)),
  encryptFile: (fileData: FileDataInterface) => dispatch(encryptFile(fileData)),
  decryptFile: (key: string) => dispatch(decryptFile(key)),
  enableDecryptMode: () => dispatch(enableDecryptMode())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
