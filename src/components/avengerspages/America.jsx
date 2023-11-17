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
        <section className='articles'>
          <article className='avengers'>
            <div className='article-wrapper'>
              <div className='bio-pic'>
                <img
                  src='https://imgix.ranker.com/list_img_v2/4961/2464961/original/brutal-captain-america-moments?w=817&h=427&fm=jpg&q=50&fit=crop'
                  alt=''
                />
              </div>
              <div className='article-body'>
                <h2>Steve Rogers</h2>
                <h1>Captain America</h1>
                <p>
                  Steve Rogers è considerato l'apice del potenziale umano e
                  opera al massimo delle prestazioni fisiche, sensoriali e
                  mentali grazie al suo potenziamento tramite il siero del
                  supersoldato.Il siero ha notevolmente migliorato il suo corpo
                  fragile e gli ha dato una resistenza di gran lunga superiore a
                  quella media di un essere umano.
                </p>
              </div>
            </div>
          </article>
          <article className='avengers'>
            <div className='article-wrapper'>
              <div className='bio-pic'>
                <img
                  src='https://i.postimg.cc/1zxmXs7p/scudo.jpg'
                  alt=''
                />
              </div>
              <div className='article-body'>
                <h2>Arma</h2>
                <h1>Scudo di vibranio</h1>
                <p>
                  Lo scudo è il principale strumento difensivo ed offensivo del
                  supereroe Capitan America, raramente visto senza di esso.
                  Realizzato in vibranio dallo scienziato Myron MacLain, questo
                  scudo è virtualmente indistruttibile ed è diventato l'icona
                  del supereroe.
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
                <img src='https://jimsterankographicprinceofdarkness.files.wordpress.com/2015/05/captain-america-113.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
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
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://i.postimg.cc/0QnRzg3L/2993116-captainamerica109.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
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
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/51K4CX8zINL.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
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
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/59a5b0e5c9b0c/clean.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
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
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/71gBV2mEKRL._AC_UF1000,1000_QL80_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
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
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/51-VTW6IksL.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default America;
