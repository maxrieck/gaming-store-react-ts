import React from 'react'
import { Link } from 'react-router-dom'


const NavBar:React.FC = () => {

  return (

    <div
        className='inline-flex border w-screen top-0 py-4 px-2 gap-x-4'
    >
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/admin'}>Admin Access</Link>
    </div>

  )
}

export default NavBar