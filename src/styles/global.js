import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }


  html, body, #root {
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-size: 62.5%;
    font-family: 'Roboto', 'Arial', 'sans-serif';
  }

  button {
    cursor: pointer;
  }

  /* Mobile Menu */
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 24px;
    height: 20px;
    left: 85%;
    bottom: 2.1%;

  @media (min-width: 768px) {
    bottom: 1.4%;
    left: 95%;
  }

  @media (min-width: 1024px){
    bottom: 0.95%;
    left: 96%;
  }
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #fff;
  height: 10% !important;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
  top: 0;
}

/* General sidebar styles */
.bm-menu {
  background: #252429;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
`;
