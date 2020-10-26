import React from "react";

import { connect } from "react-redux";
import { downloadFile, uploadFile } from "@actions/fileActions";
import { encryptFile } from "@actions/encryptActions";
import { decryptFile, enableDecryptMode } from "@actions/decryptActions";
import { setLang } from "@actions/langActions";
import { FileDataInterface } from "./interfaces";

import Header from "@components/Header";
import Hero from "@components/Hero";
import FileUploader from "@components/FileUploader";
import FileDownloader from "@components/FileDownloader";
import Loader from "@components/Loader";
import Controls from "@components/Controls";
import Footer from "@components/Footer";

import { ThemeProvider, theme } from "./theme";
import { GlobalStyle } from "./App.styles";

import { LangProvider } from "./providers/Language";

interface Props {
  uploadFile: () => void;
  downloadFile: () => void;
  encryptFile: () => void;
  decryptFile: () => void;
  enableDecryptMode: () => void;
  setLang: (isoCode?: string, other?: boolean) => void;
  isEncryptingProgress: boolean;
  isEncryptingDone: boolean;
  isDecryptingProgress: boolean;
  isDecryptingModeOn: boolean;
  isDecryptingDone: boolean;
  isoCode: string;
}

const App: React.FC<Props> = (props) => {
  const {
    uploadFile,
    downloadFile,
    encryptFile,
    decryptFile,
    enableDecryptMode,
    setLang,
    isEncryptingProgress,
    isEncryptingDone,
    isDecryptingProgress,
    isDecryptingModeOn,
    isDecryptingDone,
    isoCode,
  } = props;

  const showLoader = isEncryptingProgress || isDecryptingProgress;
  const showDownloadArea =
    isEncryptingDone || isDecryptingDone || isDecryptingModeOn;

  React.useEffect(() => {
    setLang();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <LangProvider>
        <section className="main">
          <div className="header">
            <Header onChangeLang={() => setLang(isoCode, true)} />
          </div>

          <div className="hero">
            <Hero />
          </div>

          {showLoader ? (
            <div className="loader">
              <Loader />
            </div>
          ) : (
            <>
              {showDownloadArea ? (
                <div className="downloader">
                  <FileDownloader
                    onDownload={downloadFile}
                    onDecrypt={decryptFile}
                  />
                </div>
              ) : (
                <div className="uploader">
                  <FileUploader onUpload={uploadFile} />
                  <div className="controls">
                    <Controls
                      onEncryptClick={encryptFile}
                      onDecryptClick={enableDecryptMode}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </section>

        <footer>
          <Footer />
        </footer>
      </LangProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  isEncryptingProgress: state.encrypt.isInProgress,
  isEncryptingDone: state.encrypt.isDone,
  isDecryptingModeOn: state.decrypt.isModeOn,
  isDecryptingProgress: state.decrypt.isInProgress,
  isDecryptingDone: state.decrypt.isDone,
  isoCode: state.lang.isoCode,
});

const mapDispatchToProps = (dispatch) => ({
  uploadFile: (fileData: FileDataInterface) => dispatch(uploadFile(fileData)),
  downloadFile: (fileName: string, fileContent: string) =>
    dispatch(downloadFile(fileName, fileContent)),
  encryptFile: (content: string) => dispatch(encryptFile(content)),
  decryptFile: (key: string) => dispatch(decryptFile(key)),
  enableDecryptMode: () => dispatch(enableDecryptMode()),
  setLang: (iso: string, other: boolean) => dispatch(setLang(iso, other)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
