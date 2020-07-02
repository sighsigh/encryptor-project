import * as React from "react";

import { connect } from 'react-redux';
import { uploadFile } from './actions/fileActions';
import { encryptFile } from './actions/encryptActions';
import {decryptFile,  enableDecryptMode } from './actions/decryptActions';
import { FileDataInterface } from './interfaces';

import Header from './components/Header';
import Hero from "./components/Hero";
import FileUploader from './components/FileUploader';
import FileDownloader from './components/FileDownloader';
import Loader from './components/Loader';
import Controls from './components/Controls';
import Footer from './components/Footer';

import { ThemeProvider, theme } from "./theme";
import { GlobalStyle } from './App.styles';

import { LanguageProvider } from './providers/Language';

interface Props {
  uploadFile: () => void,
  encryptFile: () => void,
  decryptFile: () => void,
  enableDecryptMode: () => void,
  isEncryptingProgress: boolean,
  isEncryptingDone: boolean,
  isDecryptingProgress: boolean,
  isDecryptingModeOn: boolean,
  isDecryptingDone: boolean
}

const App: React.FC<Props> = props => {
  const {
    uploadFile,
    encryptFile,
    decryptFile,
    enableDecryptMode,
    isEncryptingProgress,
    isEncryptingDone,
    isDecryptingProgress,
    isDecryptingModeOn,
    isDecryptingDone,
  } = props;

  const showLoader = isEncryptingProgress || isDecryptingProgress;
  const showDownloadArea = isEncryptingDone || isDecryptingDone || isDecryptingModeOn;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <LanguageProvider>
        <section className='main'>
          <div className='header'>
            <Header />
          </div>

          <div className='hero'>
            <Hero />
          </div>

          { showLoader
            ? (
              <div className='loader'>
                <Loader />
              </div>
            )
            : (
              <>
                { showDownloadArea
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
                          onEncryptClick={encryptFile}
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

      </LanguageProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  isEncryptingProgress: state.encrypt.isInProgress,
  isEncryptingDone: state.encrypt.isDone,
  isDecryptingModeOn: state.decrypt.isModeOn,
  isDecryptingProgress: state.decrypt.isInProgress,
  isDecryptingDone: state.decrypt.isDone,
});

const mapDispatchToProps = dispatch => ({
  uploadFile: (fileData: FileDataInterface) => dispatch(uploadFile(fileData)),
  encryptFile: (content: string) => dispatch(encryptFile(content)),
  decryptFile: (key: string) => dispatch(decryptFile(key)),
  enableDecryptMode: () => dispatch(enableDecryptMode())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
