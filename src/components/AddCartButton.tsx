import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/store'
import { addCartItem, } from '../store/cartSlice';
import type { Product } from '../types'
import AddCartModal from './AddCartModal';
import styles from '../pages/ProductPage.module.css'


interface AddCartButtonProps {
    product: Product;
}


const AddCartButton:React.FC<AddCartButtonProps>= ({ product }) => {

    const dispatch = useDispatch<AppDispatch>();

    const [showModal, setShowModal] = useState<boolean>(false)
    
    const handleModal = () => {
            setShowModal(true)
    }


  return (

    <>
    {showModal && <AddCartModal 
        onClose={()=>setShowModal(false)} 
        product={product}
        modalType='add'
        />}
    <button 
        onClick={() => {
            if (product.id) {
                dispatch(addCartItem(product as Required<typeof product>));
            } else {
                console.error('Product id is missing');
            }
            handleModal();
        }}
        className={`my-3 mx-5 ${styles.addCartBtn}`}
    
    >Add to Cart</button>
    
    </>

  )
}

export default AddCartButton