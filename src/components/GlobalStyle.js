import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 2% 20% 0% 20%;
    font-family: 'PT Sans',sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    text-transform: none;
    line-height: normal;
    color: #ffffff;
    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
 background-image: url("./BackGround.jpg");
 background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  }
`;
 
export default GlobalStyle;