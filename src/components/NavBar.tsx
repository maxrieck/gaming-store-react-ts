import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import Logout from './Logout'


const NavBar:React.FC = () => {

  const { currentUser, role } = useAuth() 


  return (

    <div
        className='inline-flex gap-x-4'
    >
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        
        {currentUser && role === 'admin' && 
        <Link to={'/admin'}>Admin Access</Link>
        }
        
        {!currentUser && <Link to={'/login'} >Login</Link> }        
        
        {currentUser && <Logout /> }
        
    </div>

  )
}

export default NavBar