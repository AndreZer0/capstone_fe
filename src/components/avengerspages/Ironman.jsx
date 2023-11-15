/** @format */

import { React, useState } from 'react';
import MyNav from '../navigation/MyNav';
import './america.css';
import Footer from '../footer/Footer';

const Ironman = () => {
  return (
    <>
      <MyNav />
      <div className='stark'>
        <section class='articles'>
          <article className='avengers'>
            <div class='article-wrapper'>
              <div className='bio-pic'>
                <img
                  src='https://wallpapercave.com/wp/wp2538842.jpg'
                  alt=''
                />
              </div>
              <div class='article-body'>
                <h2>Tony Stark</h2>
                <h1>Iron Man</h1>
                <p>
                  Anthony Stark, un ingegnoso inventore, erede di una famiglia
                  facoltosa, restò ferito in un campo di battaglia asiatico
                  mentre era impegnato a testare le armi da lui create per il
                  governo statunitense. Una scheggia di shrapnel si conficcò nel
                  suo cuore, costringendolo a costruire un’ incredibile armatura
                  non solo per sfuggire alla reclusione, ma anche per salvarsi
                  la vita. Grazie all’aiuto del suo compagno di prigionia, un
                  noto fisico, Tony Stark costruì il primo costume di Iron Man e
                  quando tornò a casa iniziò a impersonare l’eroe.
                </p>
              </div>
            </div>
          </article>
          <article className='avengers'>
            <div class='article-wrapper'>
              <div className='bio-pic'>
                <img
                  src='https://i.pinimg.com/736x/d1/31/65/d131654d3110dda35ed5712cba335df3.jpg'
                  alt=''
                />
              </div>
              <div class='article-body'>
                <h2>Arma</h2>
                <h1>Armature Mark</h1>
                <p>
                  Iron Man indossa una potente armatura esoscheletrica che gli
                  conferisce forza e velocità sovrumane, una resistenza allo
                  strenuo dell'invulnerabilità e la capacità di volare
                  raggiungendo velocità fino a Mach-8. Tale armatura, inventata
                  ed assemblata dallo stesso Stark, è costituita da una matrice
                  allineata molecolarmente di ferro, oro, titanio e altre leghe
                  in misura minore.
                </p>
              </div>
            </div>
          </article>
        </section>
        <div className='sorry'>
          <h3>
            Ci scusiamo per l'inconveniente, ma al momento tutti i volumi
            presenti in questa pagina sono esauriti.
          </h3>
          <h3>Saranno nuovamente disponibili molto presto!</h3>
        </div>
        <div className='shelf'>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/61IV2gezdwL.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/61IV2gezdwL.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/81hCPdX1xTL._AC_UF1000,1000_QL80_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/81hCPdX1xTL._AC_UF1000,1000_QL80_.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/51K3f0cZyyL._AC_UF1000,1000_QL80_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/51K3f0cZyyL._AC_UF1000,1000_QL80_.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://cdn.kobo.com/book-images/768a624c-ea86-42f8-abf1-333bdff57775/1200/1200/False/superior-iron-man-extremis-3-0.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://cdn.kobo.com/book-images/768a624c-ea86-42f8-abf1-333bdff57775/1200/1200/False/superior-iron-man-extremis-3-0.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/51iHYNneAtL.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/51iHYNneAtL.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://www.lafeltrinelli.it/images/9788891276261_0_536_0_75.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://www.lafeltrinelli.it/images/9788891276261_0_536_0_75.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ironman;
