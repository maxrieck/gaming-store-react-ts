import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import UserList from '../components/UserList'
import AddProductForm from '../components/AddProductForm'
import PageLayout from './PageLayout'
import { useAuth } from '../firebase/useAuth'
import { Link } from 'react-router-dom'


const AdminUser:React.FC = () => {

    

    const { currentUser, role } = useAuth()


    if (!currentUser || role !== 'admin') {
        return (

            <PageLayout>
                <h3>Access Denied</h3>
            </PageLayout>

        ) 
    }

  return (

    <PageLayout pageType='admin'>

        <h2>Admin User Access</h2>
        <hr />
        <div className='space-x-5 flex flex-col m-2'>
            <Link to='/productList' className='hover:bg-gray-800 w-50'>Product List</Link>
            <Link to='/addProduct' className='hover:bg-gray-800 w-50'>Add Product</Link>
            <Link to='/userList' className='hover:bg-gray-800 w-50'>User List</Link>    
        </div>

          

    </PageLayout>
  )
}

export default AdminUser;