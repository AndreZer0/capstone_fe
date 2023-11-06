/** @format */

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [login, setLogin] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/login`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(loginData),
        }
      );
      const data = await response.json();

      if (data.token) {
        localStorage.setItem('loggedInUser', JSON.stringify(data.token));
        navigate('/');
      } else {
        setErrorMessage('Email o password errati');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login-container '>
      <div className='row h-100 justify-content-center align-items-center'>
        <form
          className='col'
          onSubmit={onSubmit}>
          <div className='AppForm shadow'>
            <div className='row login-form'>
              <div className=' d-flex justify-content-center align-items-center'>
                <div className='AppFormLeft'>
                  <h1>LOGIN</h1>
                  <div className='form-group position-relative mb-4 '>
                    <input
                      type='text'
                      name='email'
                      className='form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none'
                      id='username'
                      placeholder='Email'
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='form-group position-relative mb-4'>
                    <input
                      type='password'
                      name='password'
                      className='form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none'
                      id='password'
                      placeholder='Password'
                      onChange={handleInputChange}
                    />
                    {errorMessage && (
                      <div className='error-message text-danger'>
                        {errorMessage}
                      </div>
                    )}
                  </div>

                  <button
                    className='btn btn-success btn-block shadow border-0 py-2 text-uppercase '
                    type='submit'>
                    Login
                  </button>

                  <p className='text-center mt-5'>
                    Non hai un account?
                    <Link to='/signup'>
                      <span className='link-signup'> Creane uno!</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
