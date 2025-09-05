import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import RegistrationForm from '../components/RegistrationForm'
import UserList from '../components/UserList'
import AddProductForm from '../components/AddProductForm'


const AdminUser:React.FC = () => {

    const [currentPage, setCurrentPage] = useState<string>('')


  return (

    <div>
        <div className='flex border m-2 p-2 gap-x-4'>
            <button value={currentPage} 
                onClick={() => setCurrentPage('products')}
                >Products</button>
            <button value={currentPage} 
                onClick={() => setCurrentPage('users')}
                >Users</button>

        </div>

        {currentPage==='products' && 
            <>
                <AddProductForm />
                <ProductList />
            </>  
        }

        {currentPage=='users' &&
            <>
                <RegistrationForm />
                <UserList />            
            </>
        }

    </div>
  )
}

export default AdminUser;