import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import PageLayout from '../pages/PageLayout';

interface Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    image?: string;
}
 
const ProductList:React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [newName, setNewName] = useState<string>('');
    const [newDescription, setNewDescription] = useState<string>('');
    const [newPrice, setNewPrice] = useState<number>(0)
    const [newPicture, setNewPicture] = useState<string>("")


    const updateProduct = async (productId:string, updatedData: string | number) => {
        const userDoc = doc(db, 'products', productId);
        await updateDoc(userDoc, updatedData);
        alert('Product updated!');

    }

    const deleteProduct = async (productId:string) => {
        await deleteDoc(doc(db, 'products', productId));
        alert('Product deleted!');
    }

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
    }, [products])

  return (

    <PageLayout pageType='admin'>
        <h2>Product List</h2>
        {products.map((products) => (
            <div key={products.id} 
                className='bg-gray-800 border m-4 p-2 space-y-2 space-x-5'>
                <div className='flex flex-row justify-between'>
                    <p>Name: {products.name}</p>
                    <p>ID: {products.id}</p>
                </div>
                <input
                    onChange={(e) => setNewName(e.target.value)}
                    type="string"
                    placeholder="Enter new name:"/>
                <button onClick={() => updateProduct(products.id, { name: newName })}>
                    Update Name
                </button>
                <input
                    onChange={(e) => setNewDescription(e.target.value)}
                    type="string"
                    placeholder="Enter new description:"/>
                <button onClick={() => updateProduct(products.id, { description: newDescription })}>
                    Update Description
                </button>
                <input
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    type="number"
                    placeholder="Enter new price:"/>
                <button onClick={() => updateProduct(products.id, { price: newPrice })}>
                    Update Price
                </button>
                <input
                    onChange={(e) => setNewPicture(e.target.value)}
                    type="string"
                    placeholder="Enter image URL:"/>
                <button onClick={() => updateProduct(products.id, { image: newPicture })}>
                    Update Picture
                </button>
                <button onClick={() => deleteProduct(products.id)}>Delete Product</button>
            </div>
        ))}
    </PageLayout>
  )
}

export default ProductList;