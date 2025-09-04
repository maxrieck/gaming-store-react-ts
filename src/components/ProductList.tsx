import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'

interface Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    image?: string;
}
 
const ProductList:React.FC = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const dataArray = querySnapshot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data(),
            })) as Product[];
            setProducts(dataArray)
        };
        fetchProducts();
    }, [])

  return (
    
    <div>
        <h2>Product List</h2>
        {products.map((products) => (
            <div key={products.id}>
                <p>Name: {products.name}</p>
                <p>Price: {products.price}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductList;