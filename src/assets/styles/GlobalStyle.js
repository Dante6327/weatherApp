import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: 'Hi Melody', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: white;
}
`;

export default GlobalStyle;
