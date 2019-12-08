import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }


  html, body, #root {
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', 'Arial', 'sans-serif';
  }

  button {
    cursor: pointer;
  }

`;
