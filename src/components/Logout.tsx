import React from 'react'
import { useAuth } from '../firebase/useAuth'
import styles from '../pages/ProductPage.module.css'


const Logout:React.FC = () => {

    const { logout } = useAuth();

    const handleLogout = async () => {
    
        try {
            await logout();
            console.log('Logout successful')
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