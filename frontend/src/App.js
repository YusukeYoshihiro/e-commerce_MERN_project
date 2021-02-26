import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Globalstyle from './Globalstyle';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Globalstyle />
      <Router>
        <Header />
        <Main className="py-3">
          <Container>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/product/:id' component={ProductScreen}/>
            <Route path='/cart/:id?' component={CartScreen}/>
          </Container>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

const Main = styled.main`
  min-height: 80vh
`;

