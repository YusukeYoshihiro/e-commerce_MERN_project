import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../fabe_logo_new.png';

const Header = () => {
  return (
    <Navbar style={{backgroundColor:'#73cac2'}} variant='light' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Img src={logo} />
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
              <Nav.Link >
                <i className='fas fa-user'></i>Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;

//Styles 
const Img = styled.img`
  width: 5rem;
  margin-right:5px;

  @media (max-width: 376px) {
    width:11rem;
  }
`;




