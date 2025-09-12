import React, { useState } from 'react'
import type { Product } from '../types'
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { removeCartItem, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
import DeleteCartModal from './DeleteCarttModal';
import styles from './CartItems.module.css'
import { Link } from 'react-router-dom'



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
        className='border m-1 flex items-center p-2 justify-between 
          bg-gradient-to-tr from-gray-900 via-zinc-800 to-cyan-900'
        key={index}>
            <img className='w-25'
            src={product.image} alt="" />
            <Link to={`/productdetail/${product.id}`}>
              <h3>{product.name}</h3>            
            </Link>
            <p>{product.price}</p>
            <div className='flex items-center'>
                <button 
                className={`${styles.cartItemBtn}`}
                onClick={() =>
                  dispatch(decreaseQuantity(product))
                }
                > - </button>
                <p className='mx-1'>{product.quantity}</p>
                <button 
                className={`${styles.cartItemBtn}`}
                onClick={() =>
                  dispatch(increaseQuantity(product))
                }> + </button>
            </div>

            <button
              className={`${styles.cartItemBtn}`}
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