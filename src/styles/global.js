import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,800&display=swap');

* {
  margin:  0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  height: 100%;
  background-color: #36b0bd;

}

body{
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font: 14px 'Open Sans', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
}
`;