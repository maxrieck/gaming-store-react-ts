import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cartSlice';
import Checkout from '../cart/Checkout';

// Mock useAuth to always return a user
jest.mock('../firebase/useAuth', () => ({
  useAuth: () => ({ currentUser: { uid: 'user123' } })
}));

// Mock createOrder to resolve immediately
jest.mock('../firebase/orders', () => ({
  createOrder: jest.fn(() => Promise.resolve('order-id')),
}));

describe('Checkout Integration', () => {
  type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity?: number;
  };

  function renderWithStore(preloadedCartItems: Product[] = []) {
    const store = configureStore({
      reducer: { cartItems: cartReducer },
      preloadedState: { cartItems: { cartItems: preloadedCartItems } },
    });
    return {
      ...render(
        <Provider store={store}>
          <BrowserRouter>
            <Checkout />
          </BrowserRouter>
        </Provider>
      ),
      store,
    };
  }

  it('shows cart item when product is in initial state', () => {
    const product: Product = {
      id: 'p1',
      name: 'Test Product',
      price: 10,
      quantity: 1,
      image: 'test.jpg',
      description: 'A test product',
      category: 'Test Category',
    };
    renderWithStore([product]);

    // The product should now appear in the cart
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('removes product from cart after placing order', async () => {
    const product: Product = {
      id: 'p2',
      name: 'Another Product',
      price: 20,
      quantity: 1,
      image: 'another.jpg',
      description: 'Another test product',
      category: 'Another Category',
    };
  renderWithStore([product]);

    // The product should be in the cart
    expect(screen.getByText('Another Product')).toBeInTheDocument();

    // Click the Place Order button
    const placeOrderBtn = screen.getByRole('button', { name: /place order/i });
    fireEvent.click(placeOrderBtn);

    // After placing order, cart should be empty
    expect(await screen.findByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
