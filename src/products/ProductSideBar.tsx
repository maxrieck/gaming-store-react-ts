import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { setSelectedCategory } from '../store/categorySlice';

const ProductSideBar: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory);

  const handleClick = (category: string) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className='flex flex-col items-start space-y-2'>
      {['All Products', 'Laptops', 'Computers', 'Monitors', 'Keyboards', 'Mouse'].map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`px-4 py-1 rounded w-35 text-white text-left ${
            selectedCategory === category ? 'bg-gray-800' : ''
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductSideBar;

