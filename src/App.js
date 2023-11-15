/** @format */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import DetailPage from './components/pages/DetailPage';
import America from './components/avengerspages/America';
import Home from './components/pages/Home';
import ProtectedRoutes from './middleware/ProtectedRoutes';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Modify from './components/pages/Modify';
import CheckoutSuccess from './components/pages/CheckoutSucess';
import Ironman from './components/avengerspages/Ironman';
import Hulk from './components/avengerspages/Hulk';
import Thor from './components/avengerspages/Thor';
import Vedova from './components/avengerspages/Vedova';
import Falco from './components/avengerspages/Falco';

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
          <Route
            path='/checkout-success'
            element={<CheckoutSuccess />}
          />
          <Route
            path='/america'
            element={<America />}
          />
          <Route
            path='/ironman'
            element={<Ironman />}
          />
          <Route
            path='/hulk'
            element={<Hulk />}
          />
          <Route
            path='/thor'
            element={<Thor />}
          />
          <Route
            path='/vedova'
            element={<Vedova />}
          />
          <Route
            path='/falco'
            element={<Falco />}
          />
        </Route>
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
