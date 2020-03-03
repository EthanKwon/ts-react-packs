import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    ${reset};

    *{
        box-sizing : border-box;
    }

    body{
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #525252;
    }

    html, body {
        height: 100%;
    }

    #root {
        height: 100%;
    }
`;

export default GlobalStyles;
