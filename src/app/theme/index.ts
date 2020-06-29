import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents;

export const theme = {
  colors: {
    dark: '#161616',
    grey: '#292929',
    light_grey: '#363636',
    dove_grey: '#98A0A6',
    white: '#ffffff',
    blue: '#009EFF',
    orange: '#FFA047'
  },
  font: {
    family: 'Nunito'
  },
  media_queries: {
    phone_only: '(max-width: 767px)',
    tablet_up: '(min-width: 768px)'
  }
}

export default styled;
export { css, keyframes, ThemeProvider };