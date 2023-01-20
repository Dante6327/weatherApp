import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}
body {
    font-family: 'Hi Melody', sans-serif;
    font-size: 16px;
}
`;

export default GlobalStyle;
