/** @format */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DetailPage from './components/pages/DetailPage';
import America from './components/avengerspages/America';
import Home from './components/pages/Home';
import ProtectedRoutes from './middleware/ProtectedRoutes';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Modify from './components/pages/Modify';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route
            path='/comic/:comicId'
            element={<DetailPage />}
          />
        </Route>
        <Route
          path='/modify/:cardsId'
          element={<Modify />}
        />

        <Route
          path='/america'
          element={<America />}
        />
        <Route
          path='/login/*'
          element={
            <Routes>
              <Route
                index
                element={<Login />}
              />
            </Routes>
          }
        />
        <Route
          path='/signup/*'
          element={
            <Routes>
              <Route
                index
                element={<Signup />}
              />
            </Routes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
