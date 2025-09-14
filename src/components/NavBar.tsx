import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../firebase/useAuth'
import Logout from './Logout'
import { IoPowerSharp } from 'react-icons/io5';
import { CgShoppingCart } from 'react-icons/cg';
import styles from './Navbar.module.css'


const NavBar:React.FC = () => {

  const { currentUser, role } = useAuth() 


  return (

    <div
        className='flex justify-between'
    >
        <Link to={'/'}
          className={`mx-2 ${styles.navButton}`}
        >
          <IoPowerSharp size={25} />
        </Link>
        <Link to={'/products'}>Products</Link>
        
        {currentUser && role === 'admin' && 
        <Link to={'/admin'}>Admin Access</Link>
        }
        
        {!currentUser && <Link to={'/login'} >Login</Link> } 

        
        {currentUser && <Logout /> }

        <Link to={'/shoppingcart'}
          className={`mx-2 ${styles.navButton}`}
        ><CgShoppingCart size={24} /></Link>
        
    </div>

  )
}

export default NavBar;