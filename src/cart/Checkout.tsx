import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';  
import { createOrder } from '../firebase/orders';
import { useAuth } from '../firebase/useAuth';
import { emptyCart } from '../store/cartSlice'; 
import CartItems from './CartItems';
import PageLayout from '../pages/PageLayout';

const Checkout = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartItems.cartItems) || [];

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );

  const handlePlaceOrder = async () => {
    if (!currentUser) {
      alert('You must be logged in to place an order.');
      return;
    }

    try {
      await createOrder({
        userId: currentUser.uid,
        products: cartItems.map(item => ({
          productId: item.id ?? '',
          quantity: item.quantity ?? 1,
          price: item.price,
          title: item.name
        })),
        totalPrice,
      });

      dispatch(emptyCart());
      navigate('/orders');
    } catch (err) {
      console.error('Failed to place order:', err);
      alert('There was an error placing your order.');
    }
  };

  return (
    <PageLayout>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          
          <CartItems cartItems={cartItems} />

          <button onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      )}
    </PageLayout>
  );
};

export default Checkout;