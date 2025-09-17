import React, { useEffect, useState } from 'react'


interface DeleteCartModalProps {
    onClose: () => void
}


const DeleteCartModal:React.FC<DeleteCartModalProps> = ({ onClose }) => {

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
    className={`fixed top-[70px] right-[25px] left-auto z-[9999] border
        text-center px-8 py-4 transition-opacity duration-1000 bg-gray-800
        ${isFading ? 'opacity-0' : 'opacity-100' }`}>

        <h4>Item removed from cart!</h4>

    </div>
  )
}

export default DeleteCartModal;