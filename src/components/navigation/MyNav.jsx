/** @format */

import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from '../data/navLink';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../../hooks/useSession';
import './nav.css';

const MyNav = () => {
  const navigate = useNavigate();
  const session = useSession();

  const login = () => {
    navigate('/login');
  };

  const signup = () => {
    navigate('/signup');
  };

  const logout = () => {
    const confirmLogout = window.confirm('Sei sicuro di voler uscire?');

    if (confirmLogout) {
      localStorage.removeItem('loggedInUser');

      navigate('/');
    }
  };

  const renderWelcomeMessageOrButtons = () => {
    if (session) {
      return (
        <>
          <h4 className='welcome mx-3'>Benvenuto, {session.firstName}</h4>
          <Button
            className='bg-danger mx-3'
            variant='outline-light'
            onClick={() => logout()}>
            Logout
          </Button>
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
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
          <Form className='d-flex'>{renderWelcomeMessageOrButtons()}</Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
