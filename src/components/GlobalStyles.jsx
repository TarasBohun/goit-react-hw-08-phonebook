import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';

import img from '../images/notebook.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(${img});
  background-color: #b3b9bd;
  background-repeat: no-repeat;
  background-size: cover;

  /* display: flex;
  justify-content: center;
  text-align: center;  */

}
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
li {
  list-style: none;
}
ul{
  margin: 0;
  padding: 0;
}
button{
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 6px ;
  border: 2px solid grey;
  color: #566574;
  
  &:hover {
    transition: all 0.3s;
    color: paleturquoise;
    background-color: #566574;
  }
}

h1, h2 {
  margin: 0;
  color: #566574;
}

input {
  padding: 3px;
  border-radius: 3px;
  font-size: 12px;
  background-color: #ffffffe9;
}

a {
  text-decoration: none;
  color: blueviolet;
}
`;
