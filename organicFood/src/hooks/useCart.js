import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../redux/slices/cartSlice';

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const add = (product) => {
    dispatch(addToCart(product));
  };

  const remove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const updateQty = (productId, quantity) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  return {
    ...cart,
    add,
    remove,
    updateQty,
  };
};

export default useCart;
