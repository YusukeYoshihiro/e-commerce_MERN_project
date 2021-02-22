import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../e-commerce_logo.svg';
const Img = styled.img`
  width: 15.5rem;
  margin-right:5px;

  @media (max-width: 376px) {
    width:11rem;
  }
`;

const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
      <Img src={logo} />
        <LinkContainer to='/'>
          <Navbar.Brand >F.A.B.E Hockey Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header




