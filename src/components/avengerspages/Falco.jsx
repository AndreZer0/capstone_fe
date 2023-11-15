/** @format */

import { React, useState } from 'react';
import MyNav from '../navigation/MyNav';
import './america.css';
import Footer from '../footer/Footer';

const Falco = () => {
  return (
    <>
      <MyNav />
      <div className='falco'>
        <section className='articles'>
          <article className='avengers'>
            <div class='article-wrapper'>
              <div className='bio-pic'>
                <img
                  src='https://www.comicbookherald.com/wp-content/uploads/2017/02/hawkeye-and-thunderbolts-comic-cover-e1487815959253.jpg'
                  alt=''
                />
              </div>
              <div class='article-body'>
                <h2>Clint Barton</h2>
                <h1>Hawkeye</h1>
                <p>
                  Cresciuto in un circo, Barton sviluppa abilità straordinarie
                  nell'uso dell'arco e delle frecce. Dopo un periodo da
                  criminale, viene ispirato dal supereroe Occhio di Falco
                  (Hawkeye) e decide di mettere le sue abilità al servizio del
                  bene. Diventa un membro chiave degli Avengers, contribuendo
                  con la sua precisione unica e abilità di tiratore scelto.
                </p>
              </div>
            </div>
          </article>
          <article className='avengers'>
            <div class='article-wrapper'>
              <div className='bio-pic'>
                <img
                  src='https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/hawkeye-freefall-header-1.jpg'
                  alt=''
                />
              </div>
              <div class='article-body'>
                <h2>Arma</h2>
                <h1>Arco e frecce</h1>
                <p>
                  Esperto tiratore, combina precisione straordinaria con abilità
                  nelle arti marziali e tattiche strategiche. Le sue frecce
                  speciali, equipaggiate con tecnologie avanzate, gli
                  conferiscono versatilità in battaglia.
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
                <img src='https://m.media-amazon.com/images/I/81QFkDwe3XL._AC_UF1000,1000_QL80_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/81QFkDwe3XL._AC_UF1000,1000_QL80_.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/61EljEP9bHL._AC_UF1000,1000_QL80_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/61EljEP9bHL._AC_UF1000,1000_QL80_.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/81RqB4GHziL._AC_UF1000,1000_QL80_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/81RqB4GHziL._AC_UF1000,1000_QL80_.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/51WDMBD7qNL.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/51WDMBD7qNL.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/61+mvRB86MS._AC_UF1000,1000_QL80_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/61+mvRB86MS._AC_UF1000,1000_QL80_.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://m.media-amazon.com/images/I/71oO97U9XQL._AC_UF1000,1000_QL80_.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://m.media-amazon.com/images/I/71oO97U9XQL._AC_UF1000,1000_QL80_.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Falco;
