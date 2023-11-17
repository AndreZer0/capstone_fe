/** @format */

import React from 'react';
import './carnage.css';
import MyNav from '../navigation/MyNav';
import './carnage.css';
const Thanos = () => {
  return (
    <>
      <MyNav />
      <div className='background-thanos'>
        <div className='weekly-wrapper'>
          <div className='overviewInfo'>
            <div className='productinfo'>
              <div className='grouptext'>
                <h3>NOME:</h3>
                <h2>Thanos</h2>
              </div>
              <div className='grouptext'>
                <h3>ALTER EGO:</h3>
                <h2>-</h2>
              </div>
              <div className='grouptext'>
                <h3>RAZZA:</h3>
                <h2>Eterno</h2>
              </div>

              <div className='productImage'>
                <img
                  src='https://i.postimg.cc/g083pQ4z/thanos-details.png'
                  alt='thanos'
                />
              </div>
            </div>
          </div>

          <div className='productSpecifications'>
            <img
              width={250}
              height={120}
              className='logo-thanos'
              src='https://i.postimg.cc/Hnyr07Kp/thanos-logo.webp'
            />
            <p className='mt-2'>
              Thanos, nato su Titano, ha un aspetto deviato e un'ossessione per
              la Morte personificata. Ambisce al potere supremo e alla
              distruzione dell'universo per placare la sua ossessione. Raccoglie
              le Gemme dell'Infinito per potenziare il suo Guanto dell'Infinito.
              In varie trame, sfida gli eroi Marvel, cercando di bilanciare la
              sovrappopolazione uccidendo metà della vita nell'universo. La sua
              storia è segnata da conflitti cosmici, spesso culminando in epiche
              battaglie contro gli Avengers e altri eroi.
            </p>

            <div className='productFeatures'>
              <div className='feature'>
                <div className='featureIcon'></div>
                <div className='featureText'>
                  <p>
                    <strong>Poteri e abilità:</strong>
                  </p>
                  <ul>
                    <li>
                      Thanos è incredibilmente forte, in grado di competere con
                      gli avversari più potenti nell'universo Marvel
                    </li>
                    <li>
                      Resistenza fisica eccezionale, potendo resistere a ferite
                      e danni notevoli
                    </li>
                    <li>
                      E' un genio tattico e strategico, abile nell'arte della
                      guerra e della pianificazione
                    </li>
                    <li>
                      Può comunicare telepaticamente e leggere le menti degli
                      altri
                    </li>
                    <li>Può manipolare e controllare varie forme di energia</li>
                  </ul>
                </div>
              </div>
              <div className='feature'>
                <div className='featureIcon'></div>
                <div className='featureText'>
                  <p>
                    <strong>Debolezze</strong>
                  </p>
                  <ul>
                    <li>
                      La sua ossessione per la Morte personificata può portarlo
                      a prendere decisioni irrazionali e distruttive
                    </li>
                    <li>
                      Noto per la sua arroganza, talvolta sottovaluta gli
                      avversari, portando a possibili errori.
                    </li>
                    <li>
                      La sua potenza massima è legata al Guanto dell'Infinito, e
                      senza di esso, può perdere parte della sua invincibilità
                    </li>
                  </ul>
                </div>
              </div>
              <div className='feature'>
                <div className='featureIcon'></div>
                <div className='featureText'></div>
              </div>
              <div className='feature'>
                <div className='featureIcon'></div>
                <div className='featureText'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thanos;
