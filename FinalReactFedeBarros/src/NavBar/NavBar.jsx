import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from '../components/CartWidget'; // Ajusta la ruta según tu estructura
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Fede Tech Logo"
            className="d-inline-block align-top"
          />
          Fede Tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/category/1">Categoria 1</Nav.Link>
            <Nav.Link as={Link} to="/category/2">Categoria 2</Nav.Link>
            <Nav.Link as={Link} to="/cart">Carrito</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
