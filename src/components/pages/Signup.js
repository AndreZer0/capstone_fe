/** @format */

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user',
  });
  const [isSuccessful, setIsSuccessful] = useState(false);

  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleCheckboxChange = event => {
    const { id, checked } = event.target;
    if (id === 'cb1') {
      setTermsAccepted(checked);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (
      userData.firstName.length < 3 ||
      userData.lastName.length < 3 ||
      userData.password.length < 4 ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)
    ) {
      setMessage('Errore nella compilazione dei dati. Riprova.');
      setTimeout(() => {
        setMessage('');
      }, 3000);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/users/create`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...userData,
          }),
        }
      );

      if (response.ok) {
        setUserData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        });
        setMessage('Benvenuto, ora ti re indirizziamo alla pagina principale!');
        setTimeout(() => {
          setMessage('');
          setIsSuccessful(true);
          navigate('/');
        }, 3000);
      } else {
        setMessage("Errore durante la creazione dell'utente");
        setTimeout(() => {
          setMessage('');
          setIsSuccessful(false);
        }, 3000);
      }

      setIsLoading(false);
    } catch (error) {
      setMessage("Errore durante la creazione dell'utente: " + error.message);
      setTimeout(() => {
        setMessage('');
      }, 4000);
    }
  };

  return (
    <>
      <div className='container-Background'>
        {isLoading ? (
          <div className='spinner-container'>
            <Spinner
              animation='border'
              role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <p>Loading...</p>
          </div>
        ) : isSuccessful ? (
          <Navigate to='/login' />
        ) : (
          <main className='format'>
            <h2>Join us!</h2>
            <Form
              noValidate
              className='form-body-user'>
              <Form.Group
                className='elementsForm'
                controlId='firstName'>
                <Form.Label className='input-title'>Nome</Form.Label>
                <Form.Control
                  required
                  type='text'
                  name='firstName'
                  placeholder='Inserisci il tuo nome'
                  value={userData.firstName}
                  onChange={handleChange}
                />
                {userData.firstName.length < 2 &&
                  userData.firstName.length > 0 && (
                    <div className='error-message'>
                      Il nome deve avere una lunghezza di almeno 2 caratteri.
                    </div>
                  )}
              </Form.Group>

              <Form.Group
                className='elementsForm'
                controlId='lastName'>
                <Form.Label className='input-title'>Cognome</Form.Label>
                <Form.Control
                  required
                  type='text'
                  name='lastName'
                  placeholder='Inserisci il tuo cognome'
                  value={userData.lastName}
                  onChange={handleChange}
                />
                {userData.lastName.length < 2 &&
                  userData.lastName.length > 0 && (
                    <div className='error-message'>
                      Il cognome deve avere una lunghezza di almeno 2 caratteri.
                    </div>
                  )}
              </Form.Group>

              <Form.Group
                className='elementsForm'
                controlId='email'>
                <Form.Label className='input-title'>Email</Form.Label>
                <Form.Control
                  required
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={userData.email}
                  onChange={handleChange}
                />
                {!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
                  userData.email
                ) && (
                  <div className='error-message'>
                    Inserisci una email valida
                  </div>
                )}
              </Form.Group>

              <Form.Group
                className='elementsForm'
                controlId='password'>
                <Form.Label className='input-title'>Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={userData.password}
                  onChange={handleChange}
                />
                {userData.password.length < 4 &&
                  userData.password.length > 0 && (
                    <div className='error-message'>
                      La password deve avere una lunghezza di almeno 4
                      caratteri.
                    </div>
                  )}
              </Form.Group>
              <div className='input_field checkbox_option'>
                <input
                  type='checkbox'
                  id='cb1'
                  onChange={handleCheckboxChange}
                />
                <label for='cb1'>I agree with terms and conditions</label>
              </div>
              <div className='input_field checkbox_option'>
                <input
                  type='checkbox'
                  id='cb2'
                />
                <label for='cb2'>I want to receive the newsletter</label>
              </div>
              <Button
                className='buttonAddComment'
                type='submit'
                onClick={handleSubmit}
                disabled={!termsAccepted}>
                Registrati
              </Button>

              <div className='message-container'>
                {message && (
                  <div
                    className={
                      message.includes('Errore')
                        ? 'NOT-success-message-put'
                        : 'success-message-put-user'
                    }>
                    {message}
                  </div>
                )}
              </div>
              <p className='text-center mt-5'>
                Hai già un account?
                <Link to='/login'>
                  <span className='link-login'> Vai al login!</span>
                </Link>
              </p>
            </Form>
          </main>
        )}
      </div>
    </>
  );
};

export default Signup;
