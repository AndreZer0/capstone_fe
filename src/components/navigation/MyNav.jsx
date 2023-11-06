/** @format */

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from '../data/navLink';
import { useNavigate } from 'react-router-dom';
import './nav.css';
import Cart from '../cart/Cart';

const MyNav = () => {
  const login = () => {
    window.location.href = '/login';
  };
  const signup = () => {
    window.location.href = '/signup';
  };

  return (
    <Navbar
      expand='lg'
      className='bg-warning nav'>
      <Container fluid>
        <Navbar.Brand
          href='#'
          className='nav-title'>
          <img
            className='logo'
            src='https://i.postimg.cc/ZYWNfGQ3/logo-comic.png'
            alt='logo'
          />
          Comics World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <NavLinks />
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button
              className='bg-danger'
              variant='outline-light'>
              Search
            </Button>
            <Button
              onClick={() => login()}
              className='bg-success mx-3'
              variant='outline-light'>
              Login
            </Button>
            <Button
              onClick={() => signup()}
              className='bg-info'
              variant='outline-light'>
              Registrati
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
