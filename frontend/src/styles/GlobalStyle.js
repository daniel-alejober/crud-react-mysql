import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-size: 62.5%;
    }
    body{
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 1px;
    }
    *,*::before,*::after{
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }
`;
