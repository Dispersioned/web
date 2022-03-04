import styled, { createGlobalStyle, css } from 'styled-components'

const resetStyles = css`
  /* Global */
  html {
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  /* Blocks */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
  }

  main {
    display: block;
  }

  /* Paddings */
  ul,
  ol,
  button {
    padding: 0;
  }

  /* Margins */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Text */
  b,
  strong {
    font-weight: bolder;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline dotted; /* 2 */
  }

  /* Settings */
  ul[class],
  ol[class] {
    list-style: none;
  }

  a {
    background-color: transparent;
    text-decoration: none;
  }
  /* For better adaptive */
  img {
    display: block;
    max-width: 100%;
    border-style: none;
  }
  /* Is it useful? */
  article > * + * {
    margin-top: 1em;
  }

  /* Forms */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
    padding: 0;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
`

const GlobalStyle = createGlobalStyle`
  ${resetStyles}

  body {
    color: white;
    background-color: #222222;
    font-family: 'Goudy Bookletter', 'serif';
    font-size: 19px;
  }

  h1 {
    font-size: 60px;
    @media (max-width: 991px) {
      font-size: 52px;
    }
    @media (max-width: 767px) {
      font-size: 48px;
    }
    @media (max-width: 575px) {
      font-size: 44px;
    }
  }

  h2 {
    font-size: 45px;
    @media (max-width: 991px) {
      font-size: 42px;
    }
    @media (max-width: 767px) {
      font-size: 38px;
    }
    @media (max-width: 575px) {
      font-size: 34px;
    }
  }

  h3 {
    font-size: 38px;
  }

  h4 {
    font-size: 32px;
  }

  p {
    font-size: 25px;
    @media (max-width: 767px) {
      font-size: 22px;
    }
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 165px;
`

export default GlobalStyle
