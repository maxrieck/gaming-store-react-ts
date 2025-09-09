import React, { useEffect, useState } from 'react'


interface AddCartModalProps {
    onClose: () => void
}


const AddCartModal:React.FC<AddCartModalProps> = ({ onClose }) => {

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
    className={`fixed top-[70px] right-[25px] left-auto z-[9999] 
        text-center px-8 py-4 transition-opacity duration-1000 bg-gray-800
        ${isFading ? 'opacity-0' : 'opacity-100' }`}>

        <h4>Item added to cart!</h4>

    </div>
  )
}

export default AddCartModal;