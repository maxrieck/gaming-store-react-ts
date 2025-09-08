import React from 'react'
import { useAuth } from '../firebase/useAuth'


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

    <button onClick={handleLogout}>Logout</button>

  )
}

export default Logout