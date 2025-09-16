import React from 'react'
import { useAuth } from '../firebase/useAuth'
import styles from '../pages/ProductPage.module.css'

interface LogoutProps {
    onClose: () => void
}

const Logout:React.FC<LogoutProps> = ({ onClose }) => {

    const { logout } = useAuth();

    const handleLogout = async () => {
    
        try {
            await logout();
            console.log('Logout successful')
            onClose()
        } catch (error) {
            console.error("Logout Failed: ", error)
        }
  };

  return (

    <button
      className={`${styles.addCartBtn}`}
    onClick={handleLogout}>Logout</button>

  )
}

export default Logout