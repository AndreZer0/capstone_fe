/** @format */

import { React } from 'react';
import Main from '../main/Main';
import MyNav from '../navigation/MyNav';
import Footer from '../footer/Footer';
import './home.css';

const Home = () => {
  return (
    <>
      <div className='Home'>
        <MyNav />

        <Main />

        <Footer />
      </div>
    </>
  );
};

export default Home;
