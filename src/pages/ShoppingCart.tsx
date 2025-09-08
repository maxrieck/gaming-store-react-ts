import React from 'react'
import { useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import PageLayout from './PageLayout';
import type { Product } from '../types';




const ShoppingCart:React.FC = () => {

    const currentCart = useSelector((state: RootState) => state.cartItems.cartItems)

    const dispatch = useDispatch<AppDispatch>();


  return (

    <PageLayout>

        {currentCart.map((product: Product, index: number) => (
            <div key={index}>
                <h3>{product.name}</h3>
            </div>
        ))}


    </PageLayout>

  )

}

export default ShoppingCart