/** @format */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './main.css';
import Jumbotron from '../jumbotron/Jumbotron';
import { nanoid } from 'nanoid';

const Main = () => {
  const [allCards, setAllCards] = useState({ card: [] });
  const getCards = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/cardsPage`
      );
      setAllCards(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    const $cards = document.querySelectorAll('.custom-card');

    $cards.forEach($card => {
      let bounds;

      function rotateToMouse(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2,
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        $card.style.transform = `
        perspective(1000px)
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

        $card.querySelector('.glow').style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
      }

      $card.addEventListener('mouseenter', () => {
        bounds = $card.getBoundingClientRect();
        document.addEventListener('mousemove', rotateToMouse);
      });

      $card.addEventListener('mouseleave', () => {
        document.removeEventListener('mousemove', rotateToMouse);
        $card.style.transform = '';
        $card.querySelector('.glow').style.backgroundImage = '';
      });
    });
  }, [allCards]);

  return (
    <>
      <div className='main-container'>
        <h1 className='avengers-title'>AVENGERS</h1>
        <Jumbotron />
        <h1 className='avengers-title'>HEROES & VILLAINS</h1>
        <article className='comic'>
          {allCards.card.map((post, i) => (
            <div
              className='panel'
              key={nanoid()}>
              <Link
                to={`/comic/${post._id}`}
                className='custom-card-link'>
                <p className='text top-left'>{post.title}</p>
                <img
                  src={post.cover}
                  alt='cover'
                />
              </Link>
            </div>
          ))}
        </article>
        <h3
          className='soon'
          id='weekly'>
          WEEKLY PICKS
        </h3>
        <div className='secret-container'>
          <a href='/carnage'>
            <div className='custom-card uno'>
              <div className='card-image'>
                <img
                  src='https://freepngimg.com/download/spiderman/30490-2-carnage-transparent-background.png'
                  alt='cover'
                />
              </div>

              <div className='secret-text'>
                <h2 className='secret'>CARNAGE</h2>
              </div>

              <div className='glow'></div>
            </div>
          </a>
          <a href='/mysterio'>
            <div className='custom-card due'>
              <div className='card-image'>
                <img
                  src='https://i.pinimg.com/originals/59/a1/aa/59a1aae212741cdfae0249413daf2dda.png'
                  alt='cover'
                />
              </div>
              <div className='secret-text'>
                <h2 className='secret'>MYSTERIO</h2>
              </div>
              <div className='glow'></div>
            </div>
          </a>
          <a href='/thanos'>
            <div className='custom-card tre'>
              <div className='card-image'>
                <img
                  src='https://i.postimg.cc/J0tKFKPJ/thanos-copia.png'
                  alt='cover'
                />
              </div>
              <div className='secret-text'>
                <h2 className='secret'>THANOS</h2>
              </div>
              <div className='glow'></div>
            </div>
          </a>
        </div>

        <h3
          className='soon'
          id='coming-soon'>
          COMING SOON
        </h3>
        <div className='secret-container-2'>
          <div className=' panel-1'>
            <p className='text bottom-left'>Top secret...</p>
            <img
              className='secret-image'
              src='https://i.postimg.cc/ZKzy3pvZ/CC37-BA0-D-4-EFF-4-D37-9842-61-EC327-AFBFF.png'
            />
          </div>
          <div className=' panel-2'>
            <p className='text top-left'>Top secret...</p>
            <img
              className='secret-image'
              src='https://i.postimg.cc/ZYddCVRV/BB1506-B2-9-A48-411-F-98-B8-F2-F4174652-A4.png'
            />
          </div>
          <div className=' panel-3'>
            <p className='text bottom-right'>Top secret...</p>
            <img
              className='secret-image'
              src='https://i.postimg.cc/2jb4nCHd/F386-C6-F1-F7-B6-4-A98-81-C7-E87-C4-CFD732-B.png'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
