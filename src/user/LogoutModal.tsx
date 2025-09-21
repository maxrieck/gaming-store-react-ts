import React from 'react'
import Logout from './Logout'
import styles from '../products/ProductPage.module.css'

interface LogoutModalProps {
  onClose: () => void
}


const LogoutModal:React.FC<LogoutModalProps> = ({ onClose }) => {

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-zinc-900 p-5 w-150 h-100 shadow-lg relative border flex flex-col justify-center items-center">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 px-2 text-white hover:text-zinc-900 hover:bg-zinc-600 hover:rounded-md"
            >
                X
            </button>
            <h2 className="text-lg font-semibold mb-6">Are you sure you want to log out?</h2>
            <div className='space-x-4'>
              <Logout onClose={onClose} />
              <button className={`${styles.addCartBtn}`} onClick={onClose}>Stay logged in</button>
            </div>
            
        </div>
    </div>
  )
}

export default LogoutModal