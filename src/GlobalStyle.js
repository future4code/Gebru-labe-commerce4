import { createGlobalStyle } from "styled-components"
import CooperBlack from './assets/fonts/CooperBlack.woff2'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    body {
        font-family: 'Cooper Black';
        height: 100vh;
        width: 100%;
    }

    @font-face {
        font-family: 'Cooper Black';
        src: url('${CooperBlack}');
        src: url('${CooperBlack}') format('embedded-opentype'),
             url('${CooperBlack}') format('truetype'),
             url('${CooperBlack}') format('woff2'),
             url('${CooperBlack}') format('woff'),
             url('${CooperBlack}') format('svg');
    }
`