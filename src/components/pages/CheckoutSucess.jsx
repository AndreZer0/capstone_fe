/** @format */
import { useNavigate, Link } from 'react-router-dom';
import MyNav from '../navigation/MyNav';
import { useSelector, useDispatch } from 'react-redux';

import './checkout.css';
import { emptyCart } from '../../context/CartContext';
const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const empty = () => {
    dispatch(emptyCart());
  };
  const returnHome = () => {
    empty();
    navigate('/');
  };
  return (
    <>
      <div className='success-container'>
        <article>
          <figure>
            <div className='image-container'>
              <img
                src='https://s3.getstickerpack.com/storage/uploads/sticker-pack/captainamerica/sticker_3.png?e7b2b7fb7534e0e4fde07f1e93d27cd0&d=200x200'
                alt='ok-cap'
                className='success-cap'
              />
            </div>
            <div className='text-container'>
              <h2 className='done'>Acquisto completato con successo!</h2>
              <h3 className='thanks'>GRAZIE!</h3>
              <h4 className='back-home'>Clicca qui per tornare sulla</h4>

              <button
                className='homepage'
                onClick={() => returnHome()}>
                Home
              </button>
            </div>
          </figure>
        </article>
      </div>
    </>
  );
};

export default CheckoutSuccess;
