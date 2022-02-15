import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    body {
        font-family: 'Roboto', sans-serif;
        height: 100vh;
        width: 100%;
    }
`