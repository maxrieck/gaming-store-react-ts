import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const DefaultSideBar: React.FC = () => {
    
  
  const location = useLocation();


  const links = [
    { path: '/products', label: 'Shop Now'},
    { path: '/shoppingcart', label: 'Checkout'},
  ];

  return (
    <div className="flex flex-col items-start space-y-2">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`px-4 py-1 rounded w-35 text-white ${
            location.pathname === link.path ? 'bg-zinc-800' : ''
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default DefaultSideBar