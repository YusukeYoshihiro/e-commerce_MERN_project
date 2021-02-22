import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Main className="py-3">
          <Container>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/product/:id' component={ProductScreen}/>
          </Container>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// styled components
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', sans-serif;
  }
  h3{
    padding : 1rem 0;
  }
`;

const Main = styled.main`
  min-height: 80vh
`;
