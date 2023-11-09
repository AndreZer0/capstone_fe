/** @format */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSession } from '../../hooks/useSession';
import axios from 'axios';
import { Button, Col, Modal, Form } from 'react-bootstrap';

const Modify = () => {
  const [comicPage, setComicPage] = useState({
    card: [
      {
        title: '',
        cover: '',
        frontPage: '',
        secondPage: '',
        thirdPage: '',
        fourthPage: '',
        fifthPage: '',
        sixthPage: '',
        seventhPage: '',
        eighthPage: '',
        ninthPage: '',
        tenthPage: '',
        eleventhPage: '',
        twelfthPage: '',
        thirteenthPage: '',
        fourteenthPage: '',
        fifteenthPage: '',
        name: '',
        information: '',
        closingPage1: {
          author: '',
          year: '',
          price: '',
        },
        closingPage2: {
          author: '',
          year: '',
          price: '',
        },
        closingPage3: {
          author: '',
          year: '',
          price: '',
        },
      },
    ],
  });

  const [editedData, setEditedData] = useState({
    title: '',
    cover: '',
    frontPage: '',
    secondPage: '',
    thirdPage: '',
    fourthPage: '',
    fifthPage: '',
    sixthPage: '',
    seventhPage: '',
    eighthPage: '',
    ninthPage: '',
    tenthPage: '',
    eleventhPage: '',
    twelfthPage: '',
    thirteenthPage: '',
    fourteenthPage: '',
    fifteenthPage: '',
    name: '',
    information: '',
    closingPage1: {
      author: '',
      year: '',
      price: '',
    },
    closingPage2: {
      author: '',
      year: '',
      price: '',
    },
    closingPage3: {
      author: '',
      year: '',
      price: '',
    },
  });
  const [isEditing, setIsEditing] = useState(false);

  const [isloading, setisLoading] = useState(false);
  const session = useSession();
  const { cardsId } = useParams();

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
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedData({
      title: comicPage.card[0].title,
      cover: comicPage.card[0].cover,
    });
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/cards/modify/${cardsId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedData),
        }
      );

      if (response.ok) {
        setIsEditing(false);
        getById(cardsId);
      } else {
        console.error('Errore durante la modifica');
      }
    } catch (error) {
      console.error('Errore durante la richiesta di modifica:', error);
    }
  };
  const handleCloseModal = () => {
    setIsEditing(false);
  };
  useEffect(() => {
    getById(cardsId); // Aggiungi questa chiamata per recuperare i commenti.
  }, [cardsId]);

  return (
    <>
      <Button
        className='modify'
        variant='success'
        onClick={handleEditClick}>
        Modifica
      </Button>

      <Modal
        show={isEditing}
        onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formTitle'>
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                type='text'
                value={editedData.title}
                onChange={e =>
                  setEditedData({
                    ...editedData,
                    title: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId='formCover'>
              <Form.Label>Copertina</Form.Label>
              <Form.Control
                type='text'
                value={editedData.cover}
                onChange={e =>
                  setEditedData({
                    ...editedData,
                    cover: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={handleCloseModal}>
            Annulla
          </Button>
          <Button
            variant='primary'
            onClick={handleSaveClick}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modify;
