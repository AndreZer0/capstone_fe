/** @format */

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

const ModalFooter = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [textTouched, setTextTouched] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidText, setIsValidText] = useState(false);

  useEffect(() => {
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    setIsValidText(text.split(' ').length > 3);
  }, [email, text]);

  useEffect(() => {
    if (show) {
      setEmailTouched(false);
      setTextTouched(false);
    }
  }, [show]);

  const handleEmailChange = e => {
    setEmail(e.target.value);

    setEmailTouched(true);
  };

  const handleTextChange = e => {
    setText(e.target.value);

    setTextTouched(true);
  };

  const handleSubmitForm = () => {
    if (isValidEmail && isValidText) {
      setEmail('');
      setText('');
      handleClose();
    } else {
      window.alert('Per favore, completa il modulo correttamente.');
    }
  };

  const handleModalClose = () => {
    setEmail('');
    setText('');
    handleClose();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contattaci</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlInput1'>
              <Form.Label>Il tuo indirizzo email</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                autoFocus
                value={email}
                onChange={handleEmailChange}
              />
              {emailTouched && !isValidEmail && (
                <Form.Text className='text-danger'>
                  Inserisci un indirizzo email valido.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Dicci la tua!</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                value={text}
                onChange={handleTextChange}
              />
              {textTouched && !isValidText && (
                <Form.Text className='text-danger'>
                  Il testo deve contenere più di 3 parole.
                </Form.Text>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={handleModalClose}>
            Chiudi
          </Button>
          <Button
            variant='primary'
            onClick={handleSubmitForm}
            disabled={!isValidEmail || !isValidText}>
            Invia
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalFooter;
