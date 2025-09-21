// Mock AddCartButton for all tests
jest.mock('../products/AddCartButton', () => ({
  __esModule: true,
  default: ({ product }: { product: any }) => (
    <button onClick={() => window.alert(`Added ${product.name}`)}>Add to Cart</button>
  ),
}));
// Mock only onAuthStateChanged, keep other real exports
jest.mock('firebase/auth', () => {
  const actual = jest.requireActual('firebase/auth');
  return {
    ...actual,
    onAuthStateChanged: jest.fn(),
  };
});
import { AuthProvider } from '../firebase/useAuth';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductDetails from '../products/ProductDetails';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as firebaseAuth from 'firebase/auth';
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../store/categorySlice';
import * as firestore from 'firebase/firestore';
// Global mock for onAuthStateChanged
(firebaseAuth.onAuthStateChanged as jest.Mock).mockImplementation((_: unknown, callback: unknown) => {
  return mockOnAuthStateChangedImpl(callback);
});
// Global mock for onAuthStateChanged
const mockOnAuthStateChangedImpl = jest.fn();
(firebaseAuth.onAuthStateChanged as jest.Mock).mockImplementation((_: unknown, callback: unknown) => {
  return mockOnAuthStateChangedImpl(callback);
});
import '@testing-library/jest-dom';

jest.mock('firebase/firestore');

const mockProduct = {
  id: 'p1',
  name: 'Test Product',
  price: 99.99,
  description: 'A great product',
  category: 'Electronics',
  image: 'test.jpg',
};

describe('ProductDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function mockOnAuthStateChanged(user: any = null) {
    mockOnAuthStateChangedImpl.mockImplementationOnce((callback) => {
      if (typeof callback === 'function') {
        callback(user);
      }
      return () => {};
    });
  }

  function renderWithProviders() {
    const store = configureStore({
      reducer: { category: categoryReducer },
      preloadedState: { category: { selectedCategory: 'All Products' } },
    });
    return render(
      <Provider store={store}>
        <AuthProvider>
          <MemoryRouter initialEntries={[`/products/${mockProduct.id}`]}>
            <Routes>
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </MemoryRouter>
        </AuthProvider>
      </Provider>
    );
  }

  it('renders product details after loading', async () => {
    // Mock onAuthStateChanged to simulate loading state
    let setUserCallback: ((user: any) => void) | undefined;
    mockOnAuthStateChangedImpl.mockImplementationOnce((callback) => {
      setUserCallback = callback;
      // Don't call immediately to simulate loading
      return () => {};
    });
    (firestore.getDoc as jest.Mock).mockResolvedValueOnce({ exists: () => true, id: mockProduct.id, data: () => mockProduct });
  const { findByText } = renderWithProviders();
  
    if (setUserCallback) setUserCallback(null);
    
    expect(await findByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('A great product')).toBeInTheDocument();
  });

  it('calls AddCartButton when add to cart is clicked', async () => {
    mockOnAuthStateChanged();
    (firestore.getDoc as jest.Mock).mockResolvedValueOnce({ exists: () => true, id: mockProduct.id, data: () => mockProduct });
  window.alert = jest.fn();
  renderWithProviders();
  const addBtn = await screen.findByRole('button', { name: /add to cart/i });
  fireEvent.click(addBtn);
  expect(window.alert).toHaveBeenCalledWith('Added Test Product');
  });
});
