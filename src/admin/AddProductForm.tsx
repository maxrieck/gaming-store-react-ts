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
    className='border bg-zinc-800 p-2 px-20 flex flex-col'
    onSubmit={handleSubmit}>

    <label htmlFor="name">Product Name</label>
    <input name="name" value={productData.name} onChange={handleChange} id='name' placeholder='Name' required/>

    <label htmlFor="price">Price</label>
    <input name="price" value={productData.price} onChange={handleChange} type='number' id='price' placeholder='Price' required/>

    <label htmlFor="category">Category</label>
    <input name="category" value={productData.category} onChange={handleChange} type='text' id='category' placeholder='Category' required/>

    <label htmlFor="description">Description</label>
    <textarea name="description" value={productData.description} onChange={handleChange} id="description" required></textarea>
        <button type='submit' className='w-50 m-6 adminButton'>Add Product</button>
    </form>
    </PageLayout>
  )
}

export default AddProductForm;