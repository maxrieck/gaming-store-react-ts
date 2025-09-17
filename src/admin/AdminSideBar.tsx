import React from 'react'
import { useAuth } from '../firebase/useAuth'
import { Link, useLocation } from 'react-router-dom'


const AdminSideBar: React.FC = () => {
    
  const { currentUser, role } = useAuth();
  const location = useLocation();

  if (!currentUser || role !== 'admin') {
    return (
      <div className="text-white p-4">
        <h3 className="text-red-500 font-semibold">Access Denied</h3>
      </div>
    );
  }

  const links = [
    { path: '/productlist', label: 'Product List'},
    { path: '/userlist', label: 'User List'},
    { path: '/addProduct', label: 'Add Product'}
  ];

  return (
    <div className="flex flex-col items-start space-y-2">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`px-4 py-1 rounded w-35 text-white ${
            location.pathname === link.path ? 'bg-gray-800' : ''
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default AdminSideBar