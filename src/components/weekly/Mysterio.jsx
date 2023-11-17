/** @format */

import React from 'react';
import './carnage.css';
import MyNav from '../navigation/MyNav';
import './carnage.css';
const Mysterio = () => {
  return (
    <>
      <MyNav />
      <div className='background-m'>
        <div className='weekly-wrapper'>
          <div className='overviewInfo'>
            <div className='productinfo'>
              <div className='grouptext'>
                <h3>NOME:</h3>
                <h2>Quentin Beck</h2>
              </div>
              <div className='grouptext'>
                <h3>ALTER EGO</h3>
                <h2>Mysterio</h2>
              </div>
              <div className='grouptext'>
                <h3>RAZZA:</h3>
                <h2>Umano</h2>
              </div>

              <div className='productImage'>
                <img
                  src='https://i.postimg.cc/bw7LhQ0h/mysterio.png'
                  alt='mysterio'
                />
              </div>
            </div>
          </div>

          <div className='productSpecifications'>
            <img
              width={330}
              height={120}
              className='logo-mysterio'
              src='https://i.postimg.cc/6pXLb9BW/mysterio-logo.png'
            />
            <p>
              Quentin Beck è un abile mago degli effetti speciali e stuntman con
              una vasta conoscenza delle illusioni e della tecnologia
              cinematografica. Dopo aver fallito nel mondo dello spettacolo,
              diventa il criminale noto come Mysterio, utilizzando le sue
              abilità per creare inganni visivi complessi e mettere alla prova
              l'eroe Spider-Man. Mysterio è noto per la sua abilità nel
              manipolare la percezione della realtà e ha sfidato il
              tessiragnatele in numerose storie dei fumetti.
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
                      Maestro nel creare illusioni sofisticate e convincenti,
                      spesso utilizzando dispositivi e tecnologie avanzate per
                      ingannare i sensi degli altri
                    </li>
                    <li>
                      Ottime competenze di combattimento fisico, acquisite
                      durante la sua carriera di stuntman
                    </li>
                    <li>
                      Possiede un genio tecnologico, creando dispositivi
                      specializzati come il suo elmetto a cupola che lo aiuta a
                      controllare le sue illusioni e a comunicare con altri
                      dispositivi
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
                      A differenza di alcuni supercriminali, Mysterio non
                      possiede abilità sovrumane o poteri fisici straordinari,
                      rendendolo vulnerabile in situazioni di combattimento
                      diretto
                    </li>
                    <li>
                      Mysterio tende a sottovalutare gli avversari, specialmente
                      Spider-Man, il che può portare a errori strategici e alla
                      sua sconfitta
                    </li>
                    <li>
                      Le sue abilità principali si basano su dispositivi
                      tecnologici, rendendolo vulnerabile a eventuali guasti o
                      danni ai suoi strumenti
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

export default Mysterio;
