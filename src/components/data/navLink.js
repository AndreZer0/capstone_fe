/** @format */

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const linkStyle = {
    fontSize: '1.2em',
  };

  return (
    <Nav className='me-auto'>
      <Link
        className='redirect'
        to='/'
        style={linkStyle}>
        Home
      </Link>
      <Nav.Link
        className='redirect'
        href='#weekly'
        style={linkStyle}>
        Weekly Picks
      </Nav.Link>
      <Nav.Link
        className='redirect'
        href='#secret-container'
        style={linkStyle}>
        Coming soon
      </Nav.Link>
    </Nav>
  );
};

export default NavLinks;
