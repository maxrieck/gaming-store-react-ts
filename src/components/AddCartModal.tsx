import React, { useEffect, useState } from 'react'
import type { Product } from '../types'


interface AddCartModalProps {
    onClose: () => void
    product: Product
}


const AddCartModal:React.FC<AddCartModalProps> = ({ onClose, product, modalType }) => {

    const [isFading, setIsFading] = useState<boolean>(false)

    useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);
    const closeTimer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (

    <div 
    className={`flex fixed top-[70px] right-[25px] left-auto z-[9999] border 
        text-center px-8 py-4 transition-opacity duration-1000 bg-gray-800
        ${isFading ? 'opacity-0' : 'opacity-100' }`}>

        <img src={product.image} className='w-25 border p-1' />  
        <h4 className='mx-2'>{product.name}
           {modalType==='add' ? ' added to cart!' :
            ' removed from cart!'
          }
           
        </h4>

    </div>
  )
}

export default AddCartModal;