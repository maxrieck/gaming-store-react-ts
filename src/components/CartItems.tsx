import React, { useState } from 'react'
import type { Product } from '../types'
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { removeCartItem, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
import DeleteCartModal from './DeleteCarttModal';



interface CartItemsProps {
  cartItems: Product[];
}


const CartItems:React.FC<CartItemsProps> = ({ cartItems }) => {

    const dispatch = useDispatch<AppDispatch>()

    const [showModal, setShowModal] = useState<boolean>(false)

    const handleModal = () => {
      setShowModal(true)
    }

  return (

    <>
    {showModal && <DeleteCartModal onClose={() =>setShowModal(false)} />}

    {cartItems.map((product:Product, index:number) => (
        
        <div 
        className='border m-1 flex items-center p-2'
        key={index}>
            <img className='w-25'
            src={product.image} alt="" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className='flex'>
                <button onClick={() =>
                  dispatch(decreaseQuantity(product))
                }
                >-</button>
                <p>{product.quantity}</p>
                <button onClick={() =>
                  dispatch(increaseQuantity(product))
                }>+</button>
            </div>

            <button
                onClick={() => {
                    dispatch(removeCartItem(product))
                    handleModal()
                }}>X</button>
        </div>

    ))}
    
    </>

  )
}

export default CartItems