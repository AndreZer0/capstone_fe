/** @format */

import { React, useState } from 'react';
import MyNav from '../navigation/MyNav';
import './america.css';
import Footer from '../footer/Footer';

const America = () => {
  return (
    <>
      <MyNav />
      <div className='america'>
        <div className='flex'>
          <div className='wrapper'>
            <div className='product-img'>
              <img
                src='https://images.everyeye.it/img-cover/capitan-america-marvel-comics-v2-39432.jpg'
                height='420'
                width='327'
              />
            </div>
            <div className='product-info'>
              <div className='product-text'>
                <h1>Captain America</h1>
                <h2>Steve Rogers</h2>
                <p>
                  Steve Rogers è considerato l'apice del potenziale umano e
                  opera al massimo delle prestazioni fisiche, sensoriali e
                  mentali grazie al suo potenziamento tramite il siero del
                  supersoldato.Il siero ha notevolmente migliorato il suo corpo
                  fragile e potenzia il suo cervello e tutte le sue funzioni
                  metaboliche e previene l'accumulo di acido lattico nei suoi
                  muscoli, dandogli una resistenza di gran lunga superiore a
                  quella media di un essere umano.
                </p>
              </div>
              <div className='product-price-btn'></div>
            </div>
          </div>
          <div className='wrapper'>
            <div className='product-img'>
              <img
                src='https://i.pinimg.com/originals/fb/2a/e8/fb2ae804b8b905d25c37c01cd2a16497.jpg'
                height='420'
                width='327'
              />
            </div>
            <div className='product-info'>
              <div className='product-text'>
                <h1>Scudo di Cap</h1>
                <h2>Arma</h2>
                <p>
                  Lo scudo è il principale strumento difensivo ed offensivo del
                  supereroe Capitan America, raramente visto senza di esso.
                  Realizzato in vibranio dallo scienziato Myron MacLain, questo
                  scudo è virtualmente indistruttibile ed è diventato l'icona
                  del supereroe.
                </p>
              </div>
              <div className='product-price-btn'></div>
            </div>
          </div>
        </div>

        <div className='shelf'>
          <div className='libro'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://jimsterankographicprinceofdarkness.files.wordpress.com/2015/05/captain-america-113.jpg' />
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://jimsterankographicprinceofdarkness.files.wordpress.com/2015/05/captain-america-113.jpg' />
              </div>
            </div>
            <button className='buy-button'>Acquista</button>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://i.postimg.cc/0QnRzg3L/2993116-captainamerica109.jpg' />
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://i.postimg.cc/0QnRzg3L/2993116-captainamerica109.jpg' />
              </div>
            </div>
            <button className='buy-button'>Acquista</button>
          </div>
          <div className='libro'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/51K4CX8zINL.jpg' />
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/51K4CX8zINL.jpg' />
              </div>
            </div>
            <button className='buy-button'>Acquista</button>
          </div>
          <div className='libro'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/59a5b0e5c9b0c/clean.jpg' />
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/59a5b0e5c9b0c/clean.jpg' />
              </div>
            </div>
            <button className='buy-button'>Acquista</button>
          </div>
          <div className='libro'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/71gBV2mEKRL._AC_UF1000,1000_QL80_.jpg' />
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/71gBV2mEKRL._AC_UF1000,1000_QL80_.jpg' />
              </div>
            </div>
            <h2 className='comic-title'>MAN OUT OF TIME</h2>
            <span className='price'>19,99€</span>
            <button className='buy-button'>Acquista</button>
          </div>
          <div className='libro'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/51-VTW6IksL.jpg' />
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/51-VTW6IksL.jpg' />
              </div>
            </div>
            <button className='buy-button'>Acquista</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default America;
