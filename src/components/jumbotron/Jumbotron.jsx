/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './jumbo.css';

const Jumbotron = () => {
  const navigate = useNavigate();

  const handleNavigate = route => {
    navigate(route);
  };

  return (
    <>
      <div className='jumbo'>
        <div
          className='jumper'
          onClick={() => handleNavigate('/america')}>
          <div className='content'>
            <h1>Captain America</h1>
            <h2>Steve Rogers</h2>
          </div>
        </div>

        <div
          className='jumper'
          onClick={() => handleNavigate('/ironman')}>
          <div className='content'>
            <h1>Iron Man</h1>
            <h2>Tony Stark</h2>
          </div>
        </div>

        <div
          className='jumper'
          onClick={() => handleNavigate('/hulk')}>
          <div className='content'>
            <h1>HULK</h1>
            <h2>Bruce Banner</h2>
          </div>
        </div>

        <div
          className='jumper'
          onClick={() => handleNavigate('/thor')}>
          <div className='content'>
            <h1>Thor</h1>
            <h2>Thor Odinson</h2>
          </div>
        </div>

        <div
          className='jumper'
          onClick={() => handleNavigate('/vedova')}>
          <div className='content'>
            <h1>Black Widow</h1>
            <h2>Natasha Romanoff</h2>
          </div>
        </div>

        <div
          className='jumper'
          onClick={() => handleNavigate('/falco')}>
          <div className='content'>
            <h1>Hawkeye</h1>
            <h2>Clint Barton</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
