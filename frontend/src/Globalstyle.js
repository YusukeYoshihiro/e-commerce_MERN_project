import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
  }

  h1{
    font-size: 1.8rem;
    padding: 1rem 0;
  }
  
  h2{
    font-size: 1.4rem;
    padding: 0.5rem 0;
  }

  h3{
    padding : 1rem 0;
  }
`;

export default Globalstyle;

