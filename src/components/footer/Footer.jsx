/** @format */

import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-left col-md-4 col-sm-6'>
        <p className='about'>
          <span> About the company</span> Comics World nasce dalla passione di
          un ragazzo per il mondo dei fumetti e la voglia di trasmettere la
          stessa passione a dei giovani lettori in erba. L'obbiettivo è di far
          conoscere i personaggi Marvel, più e meno famosi, a chi si avventura
          in queste letture per la prima volta.
        </p>
        <div className='icons'>
          <a href='#'>
            <i className='fa fa-facebook'></i>
          </a>
          <a href='#'>
            <i className='fa fa-twitter'></i>
          </a>
          <a href='#'>
            <i className='fa fa-linkedin'></i>
          </a>
          <a href='#'>
            <i className='fa fa-google-plus'></i>
          </a>
          <a href='#'>
            <i className='fa fa-instagram'></i>
          </a>
        </div>
      </div>
      <div className='footer-center col-md-4 col-sm-6'>
        <div>
          <i className='fa fa-map-marker'></i>
          <p>
            <span> Street name and number</span> City, Country
          </p>
        </div>
        <div>
          <i className='fa fa-phone'></i>
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <i className='fa fa-envelope'></i>
        </div>
      </div>
      <div className='footer-right col-md-4 col-sm-6'>
        <h2>
          Company<span> logo</span>
        </h2>
        <p className='menu'>
          <a href='#'> Home</a> <a href='#'> About</a>
          <a href='#'> Services</a> <a href='#'> Portfolio</a>
          <a href='#'> News</a> <a href='#'> Contact</a>
        </p>
        <p className='name'> Comics World &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
