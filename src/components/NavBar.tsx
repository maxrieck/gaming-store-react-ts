import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../firebase/useAuth'
import { IoPowerSharp } from 'react-icons/io5';
import { CgShoppingCart } from 'react-icons/cg';
import { FaLaptop } from 'react-icons/fa6';
import { FaRegUserCircle } from 'react-icons/fa';
import styles from './Navbar.module.css'
import DropDown from './DropDown';


const NavBar:React.FC = () => {

  const { currentUser, role } = useAuth();
  const [userMenu, setUserMenu] = useState<boolean>(false);

  const handleUserMenu = () => {
    if(userMenu===false) {
      setUserMenu(true)
    } else setUserMenu(false)
  }


  return (

    <div
        className='flex justify-between'
    >
        <Link to={'/'}
          className={`mx-2 ${styles.navButton}`}
        >
          <IoPowerSharp size={25} />
        </Link>
        <Link to={'/products'}
          className={`mx-2 ${styles.navButton}`}
        ><FaLaptop size={26}/></Link>

        <nav className="bg-gray-800 text-white flex justify-end">
          <div className='relative inline-block text-left'>
            <button onClick={handleUserMenu}
              className={`mx-2 w-10 ${styles.navButton}`}
            ><FaRegUserCircle size={24} /></button>
            {userMenu && <DropDown /> }
          </div>
        </nav>

                
        {currentUser && role === 'admin' && 
        <Link to={'/admin'}>Admin Access</Link>
        }
        

        <Link to={'/shoppingcart'}
          className={`mx-2 ${styles.navButton}`}
        ><CgShoppingCart size={24} /></Link>
        
    </div>

  )
}

export default NavBar;