import { render, screen, fireEvent } from '@testing-library/react';
import ProductSideBar from '../products/ProductSideBar';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../store/categorySlice';
import '@testing-library/jest-dom';

describe('ProductSideBar', () => {
  function renderWithStore(selectedCategory = 'All Products') {
    const store = configureStore({
      reducer: { category: categoryReducer },
      preloadedState: { category: { selectedCategory } },
    });
    return {
      ...render(
        <Provider store={store}>
          <ProductSideBar />
        </Provider>
      ),
      store,
    };
  }

  it('renders all category buttons', () => {
    renderWithStore();
    expect(screen.getByText('All Products')).toBeInTheDocument();
    expect(screen.getByText('Laptops')).toBeInTheDocument();
    expect(screen.getByText('Computers')).toBeInTheDocument();
    expect(screen.getByText('Monitors')).toBeInTheDocument();
    expect(screen.getByText('Keyboards')).toBeInTheDocument();
    expect(screen.getByText('Mouse')).toBeInTheDocument();
  });

  it('highlights the selected category', () => {
  renderWithStore('Laptops');
  const laptopsBtn = screen.getByText('Laptops');
  expect(laptopsBtn).toHaveClass('bg-zinc-800');
  });

  it('dispatches setSelectedCategory on click', () => {
    const { store } = renderWithStore();
    const computersBtn = screen.getByText('Computers');
    fireEvent.click(computersBtn);
    expect(store.getState().category.selectedCategory).toBe('Computers');
  });
});
