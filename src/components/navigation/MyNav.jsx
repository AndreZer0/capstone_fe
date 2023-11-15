/** @format */

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from '../data/navLink';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../../hooks/useSession';
import CartIcon from '../cart/CartIcon';
import Cart from '../cart/Cart';
import { emptyCart } from '../../context/CartContext';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import './nav.css';

const MyNav = () => {
  const navigate = useNavigate();
  const session = useSession();
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  const handleOpenCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const login = () => {
    navigate('/login');
  };

  const signup = () => {
    navigate('/signup');
  };
  const empty = () => {
    dispatch(emptyCart());
  };
  const logout = () => {
    const confirmLogout = window.confirm('Sei sicuro di voler uscire?');

    if (confirmLogout) {
      localStorage.removeItem('loggedInUser');
      empty();
      navigate('/');
    }
  };

  const renderWelcomeMessageOrButtons = () => {
    if (session) {
      return (
        <>
          <div className='logout-container d-flex align-items-center'>
            <CartIcon onClick={handleOpenCart} />
            <h4 className='welcome mx-3'>Benvenuto, {session.firstName}</h4>

            <Button
              className='bg-danger mx-3'
              variant='outline-light'
              onClick={() => logout()}>
              Logout
            </Button>
          </div>
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

          <Modal
            show={showCart}
            onHide={handleCloseCart}
            className='cart-modal'>
            <Modal.Header closeButton>
              <Modal.Title className='super-cart'>
                <h3>Il tuo Super-carrello</h3>
                <p>La spedizione è gratuita sugli ordini superiori a 39.99€!</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Cart onClose={handleCloseCart} />
            </Modal.Body>
          </Modal>
          <Form className='d-flex justify-content-center'>
            {renderWelcomeMessageOrButtons()}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
