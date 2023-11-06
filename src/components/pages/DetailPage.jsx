/** @format */

import React, { useState, useEffect } from 'react';
import './details.css';
import { useParams } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import { Button, Col, Card } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import MyNav from '../navigation/MyNav';
import Footer from '../footer/Footer';
const DetailPage = () => {
  const { cardsId } = useParams();

  const [comicPage, setComicPage] = useState([]);
  const [isloading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const getById = async cardId => {
    try {
      setisLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/cards/${cardsId}`
      );
      const data = await response.json();
      setComicPage(data);

      setisLoading(false);
      console.log(data);
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  useEffect(() => {
    getById(cardsId);
  }, [cardsId]);

  return (
    <>
      <MyNav />
      <h1>
        Alla fine di ogni albo troverai informazioni a riguardo e il prezzo per
        acquistarlo!
      </h1>
      <div className='book'>
        {comicPage &&
          comicPage?.card?.map((post, i) => (
            <>
              <Col key={nanoid()}>
                <HTMLFlipBook
                  width={300}
                  height={500}>
                  <div className='demoPage'>
                    <img src={post.frontPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.secondPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.thirdPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.fourthPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.fifthPage} />
                  </div>
                  <div className='last-demoPage'>
                    <p>Autori: {post.closingPage1.author}</p>
                    <p>Anno di uscita: {post.closingPage1.year}</p>
                    <p>Prezzo: {post.closingPage1.price}</p>
                  </div>
                  <div className='end'>
                    L'antemprima finisce qui, sennò ti roviniamo la lettura! Ma
                    hey, leggi sotto!
                  </div>
                </HTMLFlipBook>
                <Button
                  className='buy'
                  variant='warning'>
                  <p>
                    Ti è piaciuto? Vuoi sapere come va a finire? Allora clicca
                    <span> QUI</span> per acquistarlo!
                  </p>
                </Button>
              </Col>
              <Col key={nanoid()}>
                <HTMLFlipBook
                  width={300}
                  height={500}>
                  <div className='demoPage'>
                    <img src={post.sixthPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.seventhPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.eighthPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.ninthPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.tenthPage} />
                  </div>
                  <div className='last-demoPage'>
                    <p>Autori: {post.closingPage2.author}</p>
                    <p>Anno di uscita: {post.closingPage2.year}</p>
                    <p>Prezzo: {post.closingPage2.price}</p>
                  </div>
                  <div className='end'>
                    L'antemprima finisce qui, sennò ti roviniamo la lettura! Ma
                    hey, leggi sotto!
                  </div>
                </HTMLFlipBook>
                <Button
                  className='buy'
                  variant='warning'>
                  <p>
                    Ti è piaciuto? Vuoi sapere come va a finire? Allora clicca
                    <span> QUI</span> per acquistarlo!
                  </p>
                </Button>
              </Col>
              <Col key={nanoid()}>
                <HTMLFlipBook
                  width={300}
                  height={500}
                  className='contenitore'>
                  <div className='demoPage'>
                    <img src={post.eleventhPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.twelfthPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.thirteenthPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.fourteenthPage} />
                  </div>
                  <div className='demoPage'>
                    <img src={post.fifteenthPage} />
                  </div>
                  <div className='last-demoPage'>
                    <p>Autori: {post.closingPage3.author}</p>
                    <p>Anno di uscita: {post.closingPage3.year}</p>
                    <p>Prezzo: {post.closingPage3.price}</p>
                  </div>
                  <div className='end'>
                    L'antemprima finisce qui, sennò ti roviniamo la lettura! Ma
                    hey, leggi sotto!
                  </div>
                </HTMLFlipBook>
                <Button
                  className='buy'
                  variant='warning'>
                  <p>
                    Ti è piaciuto? Vuoi sapere come va a finire? Allora clicca
                    <span> QUI</span> per acquistarlo!
                  </p>
                </Button>
              </Col>
            </>
          ))}
      </div>
      <div className='text-center'>
        {comicPage &&
          comicPage?.card?.map((post, i) => (
            <div key={nanoid()}>
              <div className='descrizione'>
                <h1>Chi è {post.title}?</h1>
                <h2>{post.name}</h2>
                <p>{post.information}</p>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
