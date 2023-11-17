/** @format */

import React from 'react';
import './carnage.css';
import MyNav from '../navigation/MyNav';
const Carnage = () => {
  return (
    <>
      <MyNav />
      <div className='background'>
        <div className='weekly-wrapper'>
          <div className='overviewInfo'>
            <div className='productinfo'>
              <div className='grouptext'>
                <h3>NOME:</h3>
                <h2>Cletus Cortland Kasady</h2>
              </div>
              <div className='grouptext'>
                <h3>ALTER EGO</h3>
                <h2>Carnage</h2>
              </div>
              <div className='grouptext'>
                <h3>RAZZA:</h3>
                <h2>Simbionte</h2>
              </div>

              <div className='productImage'>
                <img
                  src='https://i.postimg.cc/wB7F0QNd/carnage.png'
                  alt='carnage'
                />
              </div>
            </div>
          </div>

          <div className='productSpecifications'>
            <img
              className='logo-carnage'
              src='https://i.postimg.cc/15pJ7K3k/carnage-logo.webp'
            />
            <p>
              È un supercriminale, solitamente raffigurato come un nemico
              dell'Uomo Ragno e l'arcinemico di Venom.Carnage appartiene a una
              razza di parassiti spaziali conosciuti come simbionti, che formano
              un legame simbiotico con i loro ospiti e conferiscono loro abilità
              sovrumane. Nato come una prole di Venom, Carnage è molto più
              potente del suo simbionte genitore a causa della sua biologia ed è
              per molti versi una versione più oscura di lui.
            </p>

            <div className='productFeatures'>
              <div className='feature'>
                <div className='featureIcon'></div>
                <div className='featureText'>
                  <p>
                    <strong>Poteri e abilità:</strong>
                  </p>
                  <ul>
                    <li>Forza fisica sovrumana</li>
                    <li>Agilità, riflessi e velocità sovrumane</li>
                    <li>Fattore di guarigione quasi istantaneo</li>
                    <li>
                      Creazione di armi e oggetti contundenti o lati, che può
                      staccare dal corpo simbiontico e lanciare contro i nemici
                    </li>
                    <li>Capacità di rendersi sia invisibile che liquido</li>
                    <li>
                      Capacità di sottrarre la forza vitale delle persone,
                      usando un filamento del simbionte
                    </li>
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
                      Estremamente sensibile alle alte frequenze audio ed agli
                      attacchi sonori (più che altri simbionti)
                    </li>
                    <li>
                      Sensibile a livelli intensi di calore (meno di altri
                      simbionti)
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

export default Carnage;
