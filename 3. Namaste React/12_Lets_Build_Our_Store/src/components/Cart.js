import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  return (
    <div className='text-center p-4 m-4'>
      <h1 className='text-xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button
          className='p-2 m-2 bg-black text-white rounded-lg'
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Please add some items!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
