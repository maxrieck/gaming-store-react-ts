import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../firebase/useAuth';
import { IoPowerSharp } from 'react-icons/io5';
import { CgShoppingCart } from 'react-icons/cg';
import { FaLaptop } from 'react-icons/fa6';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
import styles from './Navbar.module.css';
import DropDown from './DropDown';


const NavBar: React.FC = () => {
  const { currentUser, role } = useAuth();
  const [userMenu, setUserMenu] = useState<boolean>(false);

  const handleUserMenu = () => {
    setUserMenu(!userMenu);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      
      {/* Home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mx-2 ${styles.navButton} ${isActive ? styles.active : ''}`
        }
      >
        <IoPowerSharp size={25} />
      </NavLink>

      {/* Products */}
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `mx-2 ${styles.navButton} ${isActive ? styles.active : ''}`
        }
      >
        <FaLaptop size={26} />
      </NavLink>

      {/* User Dropdown */}
      <nav className="relative inline-block text-left">
        <button
          onClick={handleUserMenu}
          className={`mx-2 w-10 ${styles.navButton}`}
        >
          <FaRegUserCircle size={24} />
        </button>
        {userMenu && <DropDown />}
      </nav>

      {/* Admin Panel (if admin) */}
      {currentUser && role === 'admin' && (
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `mx-2 ${styles.navButton} ${isActive ? styles.active : ''}`
          }
        >
          <RiAdminLine size={24} />
        </NavLink>
      )}

      {/* Shopping Cart */}
      <NavLink
        to="/shoppingcart"
        className={({ isActive }) =>
          `mx-2 ${styles.navButton} ${isActive ? styles.active : ''}`
        }
      >
        <CgShoppingCart size={24} />
      </NavLink>
    </div>
  );
};

export default NavBar;
