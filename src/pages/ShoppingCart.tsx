import React from 'react'
import { useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import PageLayout from './PageLayout';
import CartItems from '../components/CartItems';
import { emptyCart } from '../store/cartSlice';



const ShoppingCart:React.FC = () => {

    const currentCart = useSelector((state: RootState) => state.cartItems.cartItems)

    const dispatch = useDispatch<AppDispatch>();

    const safeCart = currentCart ?? [];


  return (

    <PageLayout>

        
        <CartItems cartItems = {safeCart} />

        <button
            onClick={() => {
                dispatch(emptyCart())
            }}
        >Checkout</button>


    </PageLayout>

  )

}

export default ShoppingCart