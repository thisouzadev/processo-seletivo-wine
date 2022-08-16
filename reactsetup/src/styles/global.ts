import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
   padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
  nav button {
  background-color: transparent;
  color: #FF0000;
  margin-left: 30px;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  display: inline;
  margin: 0;
  padding: 0;
}
`
