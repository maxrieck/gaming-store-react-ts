import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import PageLayout from './PageLayout';
import type { Product } from '../types';
import { useParams } from 'react-router-dom';
import AddCartButton from '../components/AddCartButton';


const ProductDetails: React.FC = () => {

    const [product, setProduct] = useState<Product | null>(null)

    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            const docRef = doc(db, 'products', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProduct({ id: docSnap.id, ...docSnap.data() } as Product);
            } else {
                // handle not found
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <PageLayout pageType='product'>
            <div>
                {product ? (
                    <>
                        <h2>{product.name}</h2>
                        <img src={product.image} alt={product.name} className='w-150' />
                        <h3>{product.price}</h3>
                        <p>{product.description}</p>
                        <AddCartButton product={product} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </PageLayout>
    )
}

export default ProductDetails