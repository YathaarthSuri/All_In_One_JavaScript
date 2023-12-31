import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState(true);

  const onlineStatus = useOnlineStatus();

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
          <li className='px-4'>
            <Link to='/cart'>Cart</Link>
          </li>
          <li className='px-4'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <button
            onClick={() => {
              setBtnName(!btnName);
            }}
            className='login'
          >
            {btnName ? 'login' : 'logout'}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
