import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import type { Product } from '../types'
import PageLayout from '../pages/PageLayout';


const AddProductForm = () => {

    const [productData, setProductData] = useState<Omit<Product, 'id'>>({
        name:'',
        description:'',
        price:0,
        image:'',
        category:'',

    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: name === 'price' ? Number(value) : value
        });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'products'), productData);
            alert('Product was added!');
            setProductData({name:'', description:'', price:0, category:'',})
        } catch (error) {
            console.error('Error adding document', error)
        }
    }


  return (
    <PageLayout pageType='admin'>

    <form 
    className='border bg-gray-800 p-2'
    onSubmit={handleSubmit}>
        <input value={productData.name} onChange={handleChange} name='name' placeholder='Name' required/>
        <input value={productData.price} onChange={handleChange} type='number' name='price' placeholder='Price' required/>
        <textarea value={productData.description} onChange={handleChange} name="description" required></textarea>
        <button type='submit'>Add Product</button>
    </form>
    </PageLayout>
  )
}

export default AddProductForm;