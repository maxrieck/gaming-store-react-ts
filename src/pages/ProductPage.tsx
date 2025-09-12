import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, } from 'firebase/firestore';
import PageLayout from './PageLayout';
import type { Product } from '../types';
import ProductCards from '../components/ProductCards';



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
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3' >
            <ProductCards products={products} />
        </div>
    </PageLayout>

    )
};

export default ProductPage;