import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../firebase/useAuth'
import LogoutModal from './LogoutModal'




const DropDown = () => {

    const { currentUser } = useAuth();
    const [logoutModal, setLogoutModal] = useState<boolean>(false)

    const closeModal = () => {
        setLogoutModal(false)
    }

    const openModal = () => {
        setLogoutModal(true)
    }
    

  return (
    <>
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-700 shadow-lg z-50">
      <ul className="py-1">

        {!currentUser && <Link to={'/login'} >Login</Link> } 

        {currentUser && <>
        <li>
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
          >
            User Profile
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
          >
            Order History
          </Link>
        </li>
         
        <li>
          <button
            onClick={openModal}
            className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
          >
            Logout
          </button>
        </li>
        </> }
      </ul>
    </div>

    {logoutModal && <LogoutModal onClose={closeModal} /> }
    </>
  )
}

export default DropDown