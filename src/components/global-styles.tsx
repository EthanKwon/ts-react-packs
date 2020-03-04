import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    ${reset};

    *{
        box-sizing : border-box;
    }

    body{
        font-family: 'Play', sans-serif;
        background-color: #525252;
    }

    html, body {
        height: 100%;
    }

    #root {
        height: 100%;
    }

    input {
        border : none;
    }

    a {
        text-decoration : none;
    }
`;

export default GlobalStyles;
