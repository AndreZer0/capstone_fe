/** @format */

import axios from 'axios';
import useSession from '../../hooks/useSession';

const PayButton = ({ products }) => {
  const user = useSession();
  console.log(user.id);
  const handleCheckout = async () => {
    try {
      console.log(products);

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/stripe/create-checkout-session`,
        {
          products,
          userId: user.id,
        }
      );

      console.log('Response from server:', response.data);

      if (response.data) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Error during checkout:', error.message);
    }
  };

  return (
    <button
      className='pay'
      onClick={handleCheckout}>
      Check Out
    </button>
  );
};

export default PayButton;
