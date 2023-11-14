/** @format */

import { React } from 'react';
import Main from '../main/Main';
import MyNav from '../navigation/MyNav';
import Footer from '../footer/Footer';

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
