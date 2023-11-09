/** @format */

import React, { useState, useEffect, useCallback } from 'react';
import './details.css';
import { useParams, useNavigate } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import { Button, Col, Form } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import MyNav from '../navigation/MyNav';
import Footer from '../footer/Footer';
import { useSession } from '../../hooks/useSession';
import axios from 'axios';

const DetailPage = () => {
  const session = useSession();
  const navigate = useNavigate();
  const { comicId } = useParams();
  const { cardsId } = useParams();
  const [comicPage, setComicPage] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [isloading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [postComments, setPostComments] = useState({});
  const [commentAdded, setCommentAdded] = useState(false);
  const [newComment, setNewComment] = useState('');
  const getComicsByCardId = async cardId => {
    try {
      console.log(
        'Invio richiesta al server per ottenere i comic della card:',
        cardId
      );
      setisLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/cards/${cardId}/comics`
      );
      const data = await response.json();
      console.log('Dati ricevuti dal server:', data);

      if (response.ok) {
        setComicPage(data);
      } else {
        setError(data.message);
      }

      setisLoading(false);
    } catch (e) {
      setError(e);
      console.error('Errore durante la richiesta:', e);
    }
  };

  const handleEditClick = () => {
    navigate(`/modify/${comicId}`);
  };

  const getComments = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/comments/${comicId}`
      );
      const data = await response.json();
      setComments(data);
    } catch (e) {
      console.error('Errore durante il recupero dei commenti', e);
    }
  };

  const addNewComment = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/cards/${comicId}/comment/create`,
        {
          username: session.id,
          content: newComment,
        }
      );

      if (response.status === 201) {
        const newCommentData = response.data.payload;
        setPostComments(prevComments => ({
          ...prevComments,
          [cardsId]: [...(prevComments[cardsId] || []), newCommentData],
        }));

        setNewComment('');
        setCommentAdded(true);
        getComments();
      } else {
        console.error(
          "Errore durante l'invio del commento: risposta non valida"
        );
      }
    } catch (error) {
      console.error("Errore durante l'invio del commento:", error);
    }
  };

  const isUserCommentAuthor = comment => {
    return comment.username === session.id;
  };

  const handleEditComment = async comment => {
    if (isUserCommentAuthor(comment)) {
      const updatedComment = prompt('Modifica il commento:', comment.content);
      if (updatedComment !== null) {
        try {
          const response = await axios.put(
            `${process.env.REACT_APP_SERVER_BASE_URL}/cards/${comicId}/comments/${comment._id}/modify`,
            {
              content: updatedComment,
            }
          );

          if (response.status === 200) {
            const updatedComments = {
              ...comments,
              [comment._id]: { ...comment, content: updatedComment },
            };
            setComments(updatedComments);
            window.alert('Commento modificato con successo!');
            getComments(updatedComments);
          } else {
            console.error(
              "Errore durante l'aggiornamento del commento. Status code:",
              response.status
            );
          }
        } catch (error) {
          console.error("Errore durante l'aggiornamento del commento:", error);
        }
      }
    } else {
      console.log("Non sei l'autore di questo commento");
    }
  };
  const handleDeleteComment = async comment => {
    if (isUserCommentAuthor(comment)) {
      if (window.confirm('Sei sicuro di voler eliminare questo commento?')) {
        try {
          const response = await axios.delete(
            `${process.env.REACT_APP_SERVER_BASE_URL}/cards/${comicId}/comments/${comment._id}/delete`
          );
          window.alert('Commento eliminato con successo!');
          getComments();
          if (response.status === 204) {
            const updatedComments = comments.filter(c => c._id !== comment._id);
            setComments(updatedComments);
          } else {
            console.error(
              "Errore durante l'eliminazione del commento. Status code:",
              response.status
            );
          }
        } catch (error) {
          console.error("Errore durante l'eliminazione del commento:", error);
        }
      }
    } else {
      console.log("Non sei l'autore di questo commento e non puoi eliminarlo.");
    }
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
          {isEditing ? (
            <Button
              className='save'
              variant='success'
              onClick={handleSaveClick}>
              Salva
            </Button>
          ) : (
            <div className='mod-buttons'>
              <h2 className='welcome-admin'>
                Benvenuto {session.firstName}, scegli se modificare la tua card
                o eliminarla del tutto
              </h2>
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
          )}
        </>
      )}
      <div className='book'>
        {comicPage &&
          comicPage?.comics?.map((album, i) => (
            <Col key={nanoid()}>
              <HTMLFlipBook
                width={300}
                height={500}>
                <div className='demoPage'>
                  <img src={album.cover} />
                </div>
                <div className='demoPage'>
                  <img src={album.images[0]} />
                </div>
                <div className='demoPage'>
                  <img src={album.images[1]} />
                </div>
                <div className='demoPage'>
                  <img src={album.images[2]} />
                </div>
                <div className='demoPage'>
                  <img src={album.images[3]} />
                </div>

                <div className='end'>
                  L'antemprima finisce qui, sennò ti roviniamo la lettura! Ma
                  hey, leggi sotto!
                </div>
              </HTMLFlipBook>
              <Button
                variant='warning'
                className='buy'>
                <p>Aggiungi al carrello</p>
              </Button>
              <div className='bio'>
                <p>Autori: {album.author}</p>
                <p>Anno di uscita: {album.year}</p>
                <p>Prezzo: {album.price}</p>
              </div>
            </Col>
          ))}
      </div>

      <div className='comment-section'>
        <div className='comment-box justify-content-center mt-5 border-left border-right'>
          <h2>Commenti</h2>
          {comments ? (
            comments?.comm?.map((comment, index) => (
              <div
                className='d-flex justify-content-center py-2'
                key={comment.id}>
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

      <div className='text-center'>
        {comicPage &&
          comicPage?.card?.map((post, i) => (
            <div key={nanoid()}>
              <div className='descrizione'>
                <h1>Chi è {post.title}?</h1>
                <h2>{post.name}</h2>
                {isEditing ? (
                  <Form.Group controlId='formInformation'>
                    <Form.Label>Informazioni</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={3}
                      value={editedData.information}
                      onChange={e =>
                        setEditedData({
                          ...editedData,
                          information: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                ) : (
                  <p>{post.information}</p>
                )}
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </>
  );
};

export default DetailPage;
