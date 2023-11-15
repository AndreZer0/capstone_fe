/** @format */

import { React, useState } from 'react';
import MyNav from '../navigation/MyNav';
import './america.css';
import Footer from '../footer/Footer';

const Thor = () => {
  return (
    <>
      <MyNav />
      <div className='thor'>
        <section class='articles'>
          <article className='avengers'>
            <div class='article-wrapper'>
              <div className='bio-pic'>
                <img
                  src='https://imgix.ranker.com/list_img_v2/7409/2647409/original/best-thor-comics-storylines-u2?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720'
                  alt=''
                />
              </div>
              <div class='article-body'>
                <h2>Thor Odinson</h2>
                <h1>Thor</h1>
                <p>
                  Ispirato all'omonima divinità della mitologia norrena, Thor,
                  noto come il Dio del Tuono (God of Thunder) o Il Tonante (The
                  Thunderer), è l'erede al trono di Asgard, figlio di Odino e di
                  Gea. Grazie ai poteri derivatigli dal suo doppio retaggio e
                  dal martello incantato Mjolnir, Thor è uno dei più forti e più
                  importanti protettori di entrambi i mondi, un supereroe membro
                  fondatore dei Vendicatori e uno degli esseri più potenti
                  dell'Universo Marvel.
                </p>
              </div>
            </div>
          </article>
          <article className='avengers'>
            <div class='article-wrapper'>
              <div className='bio-pic'>
                <img
                  src='https://sportshub.cbsistatic.com/i/2021/03/18/0025547d-9d0e-43ea-8613-61ac6d71fe52/thor-7-hammer-changes-mjolnir-powers-marvel-comics-spoilersjpg-1237231.jpg'
                  alt=''
                />
              </div>
              <div class='article-body'>
                <h2>Arma</h2>
                <h1>Mjolnir</h1>
                <p>
                  Un grosso martello da guerra a forma di parallelepipedo
                  rettangolo grigio con l'impugnatura corta, avvolta in lacci di
                  cuoio marrone e culminante in un cordino circolare. Oltre a
                  conferire immensi poteri a chi lo impugna, Mjolnir è
                  virtualmente indistruttibile, può venire brandito solo da
                  coloro che ne sono ritenuti degni ed è in grado di tornare
                  sempre in mano del suo possessore.
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
                <img src='https://s3.amazonaws.com/comicgeeks/comics/covers/large-3982174.jpg?1699579703' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://s3.amazonaws.com/comicgeeks/comics/covers/large-3982174.jpg?1699579703' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://cdn.marvel.com/u/prod/marvel/i/mg/9/60/64e3b7fb32a93/clean.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://cdn.marvel.com/u/prod/marvel/i/mg/9/60/64e3b7fb32a93/clean.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://storage.googleapis.com/hipcomic/p/73e401e6c17a39dfe00b9a0058d252b0-800.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://storage.googleapis.com/hipcomic/p/73e401e6c17a39dfe00b9a0058d252b0-800.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://storage.googleapis.com/hipcomic/p/46313a02eeebf442e4783f88e851bd69-800.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://storage.googleapis.com/hipcomic/p/46313a02eeebf442e4783f88e851bd69-800.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://i.ebayimg.com/images/g/MsQAAOSw9ctgzsTc/s-l1200.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://i.ebayimg.com/images/g/MsQAAOSw9ctgzsTc/s-l1200.jpg' />
              </div>
            </div>
          </div>
          <div className='libro-avenger'>
            <div className='inner-book'>
              <div className='img'>
                <img src='https://www.comicsbox.it/cover/THORVE_M_281.jpg' />
                <div className='sold-out-banner'>SOLD OUT</div>
              </div>
              <div className='page'></div>
              <div className='page page-2'></div>
              <div className='page page-3'></div>
              <div className='page page-4'></div>
              <div className='page page-5'></div>
              <div className='img final-page'>
                <img src='https://www.comicsbox.it/cover/THORVE_M_281.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Thor;
