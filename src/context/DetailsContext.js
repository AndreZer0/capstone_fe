/** @format */

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import { useSession } from '../hooks/useSession';

const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [comicPage, setComicPage] = useState([]);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [postComments, setPostComments] = useState({});
  const [commentAdded, setCommentAdded] = useState(false);
  const [newComment, setNewComment] = useState('');

  const { comicId } = useParams();

  const session = useSession();
  const navigate = useNavigate();

  const getComicsByCardId = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/cards/${comicId}/comics`
      );
      const data = await response.json();

      if (response.ok) {
        setComicPage(data);
      } else {
        setError(data.message);
      }
    } catch (e) {
      setError(e);
      console.error('Errore durante la richiesta:', e);
    }
  };

  const getComments = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/cards/${comicId}/comments`
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
          [comicId]: [...(prevComments[comicId] || []), newCommentData],
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
  };

  useEffect(() => {
    getComicsByCardId(comicId);
    getComments();
  }, [comicId]);

  return (
    <DetailsContext.Provider
      value={{
        comicPage,
        error,
        comments,
        postComments,
        commentAdded,
        newComment,

        getComicsByCardId,
        getComments,
        addNewComment,

        handleEditClick,
        handleAddToCart,
        isUserCommentAuthor,
        handleEditComment,
        handleDeleteComment,
        setNewComment,
      }}>
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetailsContext = () => {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error(
      "useDetailsContext deve essere utilizzato all'interno di DetailsProvider"
    );
  }
  return context;
};
