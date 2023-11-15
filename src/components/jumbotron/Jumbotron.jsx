/** @format */
import React from 'react';
import { Link } from 'react-router-dom';
import './jumbo.css';

const Jumbotron = () => {
  return (
    <>
      <div className='jumbo'>
        <div className='jumper'>
          <Link
            to='/america'
            className='link-to'>
            <div className='content'>
              <h1>Captain America</h1>
              <h2>Steve Rogers</h2>
            </div>
          </Link>
        </div>
        <div className='jumper'>
          <Link
            to='/ironman'
            className='link-to'>
            <div className='content'>
              <h1>Iron Man</h1>
              <h2>Tony Stark</h2>
            </div>
          </Link>
        </div>
        <div className='jumper'>
          <Link
            to='/hulk'
            className='link-to'>
            <div className='content'>
              <h1>HULK</h1>
              <h2>Bruce Banner</h2>
            </div>
          </Link>
        </div>

        <div className='jumper'>
          <Link
            to='/thor'
            className='link-to'>
            <div className='content'>
              <h1>Thor</h1>
              <h2>Thor Odinson</h2>
            </div>
          </Link>
        </div>
        <div className='jumper'>
          <Link
            to='/vedova'
            className='link-to'>
            <div className='content'>
              <h1>Black Widow</h1>
              <h2>Natasha Romanoff</h2>
            </div>
          </Link>
        </div>
        <div className='jumper'>
          <Link
            to='/falco'
            className='link-to'>
            <div className='content'>
              <h1>Hawkeye</h1>
              <h2>Clint Barton</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
