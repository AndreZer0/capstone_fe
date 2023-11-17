/** @format */

import { React, useState } from 'react';
import MyNav from '../navigation/MyNav';
import './america.css';
import Footer from '../footer/Footer';

const Hulk = () => {
  return (
    <>
      <MyNav />
      <div className='hulk'>
        <section className='articles'>
          <article className='avengers'>
            <div className='article-wrapper'>
              <div className='bio-pic'>
                <img
                  src='https://cdn.mos.cms.futurecdn.net/ggoUJ4fSQPZLHbBGHLj8F6-1200-80.jpg'
                  alt=''
                />
              </div>
              <div className='article-body'>
                <h2>Bruce Banner</h2>
                <h1>Hulk</h1>
                <p>
                  L’origine del suo potere risiede in un evento fortuito: è
                  stato un esperimento andato male a trasformare lo scienziato
                  Bruce Banner in Hulk, una montagna verde di muscoli. Banner
                  venne travolto da una bomba di radiazioni gamma mentre cercava
                  di salvare la vita di un ragazzo: si salvò, ma per contro si
                  trasformò in un gigante invulnerabile e molto forte.
                </p>
              </div>
            </div>
          </article>
          <article className='avengers'>
            <div className='article-wrapper'>
              <div className='bio-pic'>
                <img
                  src='https://static1.srcdn.com/wordpress/wp-content/uploads/2022/04/Hulk-Punch.jpg'
                  alt=''
                />
              </div>
              <div className='article-body'>
                <h2>Arma</h2>
                <h1>Pugni</h1>
                <p>I suoi pugni.</p>
                <p>Letteralmente.</p>
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
                <img src='https://m.media-amazon.com/images/I/91EVpVK5qhL._AC_UF1000,1000_QL80_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/91EVpVK5qhL._AC_UF1000,1000_QL80_.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://cdn.marvel.com/u/prod/marvel/i/mg/6/a0/5f2c342578dd4/clean.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://cdn.marvel.com/u/prod/marvel/i/mg/6/a0/5f2c342578dd4/clean.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://i.ebayimg.com/images/g/t7cAAOSwQ8xc9~GU/s-l1600.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://i.ebayimg.com/images/g/t7cAAOSwQ8xc9~GU/s-l1600.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/51RAMOptdcL._SY445_SX342_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/51RAMOptdcL._SY445_SX342_.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://upload.wikimedia.org/wikipedia/it/e/e8/Copertina_World_War_Hulk_1.png' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://upload.wikimedia.org/wikipedia/it/e/e8/Copertina_World_War_Hulk_1.png' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/5108TPiry9L._SY445_SX342_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/5108TPiry9L._SY445_SX342_.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hulk;
