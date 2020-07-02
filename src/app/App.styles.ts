import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => (props.theme.colors.dark)};
        box-sizing: border-box;
        color: ${props => (props.theme.colors.dark)};
        font-family: ${props => (props.theme.font.family)};
        font-weight: 300;
        margin: 0;
        padding: 0;
        min-height: 100vh;

        * { box-sizing: border-box; }
    }

    .main {
        display: grid;
        grid-template: "header  " auto
                        ".      " 144px
                        "hero   " auto
                        ".      " 24px
                        "manager" auto;
    }

    .header {
        grid-area: header;
    }

    .hero {
        grid-area: hero;
        padding: 0 24px;
    }

    .uploader,
    .downloader,
    .loader {
        grid-area: manager;
    }

    .controls {
        margin-top: 48px;
    }

    footer {
        margin-top: 192px;

        @media ${props => props.theme.media_queries.phone_only} {
            margin-top: 174px;
        }
    }
`;