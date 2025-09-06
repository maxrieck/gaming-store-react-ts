import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, } from 'firebase/firestore';
import PageLayout from './PageLayout';


interface Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    image?: string;
}

const ProductPage:React.FC = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const dataArray = querySnapshot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data(),
            })) as Product[];
            setProducts(dataArray)
        }
        fetchProducts()
        
    }, [])

    console.log(products)

    return (

    <PageLayout>
        <h2>Products</h2>
        {products.map((product) => (
            <div 
            className='border m-1'
            key={product.id}>
                <h4>{product.name}</h4>
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
            </div>
        ))}


    </PageLayout>

    )
};

export default ProductPage;