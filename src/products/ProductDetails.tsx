import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import PageLayout from '../pages/PageLayout';
import type { Product } from '../types';
import { useParams } from 'react-router-dom';
import AddCartButton from './AddCartButton';
import styles from './ProductPage.module.css'


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
                        <h2 className={` ${styles.productBanner}`}
                        >{product.name}</h2>

                        <div className="max-w-4xl space-y-3 mx-auto p-6 px-5 bg-zinc-800 text-zinc-100 rounded-lg shadow my-8">


                        <img src={product.image} alt={product.name} className='w-150' />
                        <h3>${product.price}</h3>
                        <p>{product.description}</p>

                        <AddCartButton product={product} />
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </PageLayout>
    )
}

export default ProductDetails