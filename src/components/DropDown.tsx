import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../firebase/useAuth'
import LogoutModal from './LogoutModal'
import RegistrationForm from './RegistrationForm'




const DropDown = () => {

    const { currentUser } = useAuth();
    const [logoutModal, setLogoutModal] = useState<boolean>(false)
    const [createModal, setCreateModal] = useState<boolean>(false)

    const closeLogoutModal = () => {
        setLogoutModal(false)
    }

    const openLogoutModal = () => {
        setLogoutModal(true)
    }

    const closeCreateModal = () => {
        setCreateModal(false)
    }

    const openCreateModal = () => {
        setCreateModal(true)
    }
    

  return (
    <>
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-700 shadow-lg z-50">
      <ul className="py-1">

        {!currentUser && 
        <>
        <li>
          <Link to={'/login'} 
            className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
          >Login</Link> 
        </li>
        <li>
          <button
            onClick={openCreateModal}
            className="block px-4 py-2 w-full text-left text-sm text-white hover:bg-gray-600"
          >
            Create Profile
          </button>
        </li>
        </>
        }

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
            onClick={openLogoutModal}
            className="block px-4 py-2 w-full text-left text-sm text-white hover:bg-gray-600"
          >
            Logout
          </button>
        </li>
        </> }
      </ul>
    </div>

    {logoutModal && <LogoutModal onClose={closeLogoutModal} /> }
    {createModal && <RegistrationForm onClose={closeCreateModal} /> }
    </>
  )
}

export default DropDown