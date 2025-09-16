import React from 'react'
import NavBar from '../components/NavBar';
import ProductSideBar from '../products/ProductSideBar';
import AdminSideBar from '../components/AdminSideBar'
import { Link } from 'react-router-dom'


type PageLayoutProps = {
    children?:React.ReactNode;
    pageType?: 'product' | 'admin' | 'default';
}

const PageLayout:React.FC<PageLayoutProps> = ({ children, pageType = 'default' }) => {
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] grid-rows-[auto_1fr_auto] min-h-screen bg-gray-900">
      <header className="col-span-full bg-gray-800 text-white p-4 rounded-3xl m-3">
        <NavBar />
      </header>

      <aside className="hidden md:block p-4">
        <div className="flex flex-col items-start space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded w-35 text-white ${
                    location.pathname === link.path ? 'bg-gray-800' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <hr className='my-1'/>
        {pageType === 'product' && <ProductSideBar />}
        {pageType === 'admin' && <AdminSideBar />}  
      </aside>

      <main className="p-4">
        {children}
      </main>

      <footer className="col-span-full text-center p-4">
        Footer
      </footer>
    </div>

  )
}

export default PageLayout