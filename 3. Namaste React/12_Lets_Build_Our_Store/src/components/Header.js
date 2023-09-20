import { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import NameContext from '../utils/NameContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState(true);

  const onlineStatus = useOnlineStatus();

  // const data = useContext(NameContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-200'>
      <div>
        <img className='w-24' src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4 font-bold text-xl'>
            <Link to='/cart'>Cart : {cartItems.length} Items</Link>
          </li>
          <li className='px-4'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <button onClick={() => setBtnName(!btnName)} className='login px-4'>
            {btnName ? 'login' : 'logout'}
          </button>

          {/* <li className='font-bold px-4'>{data.loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
