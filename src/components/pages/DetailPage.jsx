/** @format */

import React, { useEffect, useState } from 'react';
import {
  useDetailsContext,
  DetailsProvider,
} from '../../context/DetailsContext';

import { Button, Col, Row, Container } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { useParams, useNavigate } from 'react-router-dom';
import MyNav from '../navigation/MyNav';
import Footer from '../footer/Footer';
import { useSession } from '../../hooks/useSession';
import { ToastContainer, toast } from 'react-toastify';
import { addCart, prodotti } from '../../context/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './details.css';

const DetailPage = () => {
  const {
    comicPage,

    comments,

    newComment,
    getComicsByCardId,
    getComments,
    addNewComment,
    isUserCommentAuthor,
    handleEditComment,
    handleDeleteComment,
    setNewComment,
  } = useDetailsContext();

  const session = useSession();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { comicId } = useParams();
  const products = useSelector(prodotti);

  const handleEditClick = () => {
    navigate(`/modify/${comicId}`);
  };

  const handleAddToCart = album => {
    dispatch(
      addCart({
        id: album._id,
        title: album.title,
        price: album.price,
        cover: album.cover,
      })
    );
    toast.success('Prodotto aggiunto con successo!');
  };

  useEffect(() => {
    getComicsByCardId(comicId);
    getComments();
  }, [comicId]);

  return (
    <>
      <MyNav />

      {session.role === 'admin' && (
        <>
          <div className='mod-buttons'>
            <h3 className='welcome-admin'>
              Benvenuto {session.firstName}, scegli se modificare la tua card o
              eliminarla del tutto
            </h3>
            <Button
              className='modify'
              variant='success'
              onClick={handleEditClick}>
              <p> Vai alla pagina di modifica</p>
            </Button>
            <Button
              className='delete'
              variant='danger'>
              <p>Elimina</p>
            </Button>
          </div>
        </>
      )}
      <div className='libro-dettaglio'>
        {comicPage &&
          comicPage?.comics?.map((album, i) => (
            <Col key={nanoid()}>
              <div className='main'>
                <div class='book'>
                  <div class='book-cover'>
                    <img src={album.cover} />
                  </div>
                  <div class='book-content'>
                    <img src={album.images[0]} />
                    <img src={album.images[1]} />
                    <img src={album.images[2]} />
                    <img src={album.images[3]} />
                    <div className='end'>
                      L'anteprima finisce qui, sennò ti roviniamo la lettura! Ma
                      se sei interessato, puoi acquistarlo!
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='60'
                        height='60'
                        fill='currentColor'
                        className='bi bi-arrow-down-square'
                        viewBox='0 0 16 16'>
                        <path
                          fillRule='evenodd'
                          d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='capture'>
                <Button
                  type='button'
                  variant='warning'
                  className='buy'
                  onClick={() => handleAddToCart(album)}>
                  <p>Aggiungi al carrello</p>
                </Button>
                <div className='bio'>
                  <h3>{album.title}</h3>
                  <p>Autori: {album.author}</p>
                  <p>Anno di uscita: {album.year}</p>
                  <p className='album-price'>Prezzo: {album.price}€</p>
                </div>
              </div>
            </Col>
          ))}
        <ToastContainer autoClose={3000} />
      </div>

      <div className='comment-section'>
        <div className='comment-box justify-content-center mt-5 border-left border-right'>
          <h2>Commenti</h2>
          {comments ? (
            comments?.comm?.map((comment, index) => (
              <div
                className='d-flex justify-content-center py-2'
                key={index}>
                <div className='second py-2 px-2'>
                  <div className='d-flex justify-content-between py-1 pt-2'>
                    <div className='avatar'>
                      {comment.username && (
                        <p>
                          <img
                            src='https://steamuserimages-a.akamaihd.net/ugc/2010343007809544492/4EEA80255C8B72C2450A9E59E688C59470DFB627/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
                            width='24'
                            height='24'
                          />
                          <span>Utente #{comment.username}</span>
                        </p>
                      )}
                      {comment.content && <p>{comment.content}</p>}

                      {isUserCommentAuthor(comment) && (
                        <>
                          <Button
                            variant='info'
                            className='mx-3'
                            onClick={() => handleEditComment(comment)}>
                            Modifica
                          </Button>
                          <Button
                            variant='danger'
                            onClick={() => handleDeleteComment(comment)}>
                            Elimina
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Nessun commento disponibile.</p>
          )}
          <div className='add-comment d-flex justify-content-center pt-3 pb-2'>
            <input
              type='text'
              name='text'
              placeholder='Aggiungi il tuo commento'
              className='form-control addtxt'
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
            />

            <button
              type='button'
              className='btn btn-primary'
              onClick={addNewComment}>
              Aggiungi Commento
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const DetailPageWrapper = () => {
  return (
    <DetailsProvider>
      <DetailPage />
    </DetailsProvider>
  );
};

export default DetailPageWrapper;
