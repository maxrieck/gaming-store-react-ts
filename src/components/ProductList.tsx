import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

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
    }, [])

  return (

    <div>
        <h2>Product List</h2>
        {products.map((products) => (
            <div key={products.id} 
                style={{border: 'solid 1px', margin: "1rem"}}>
                <div>
                    <p>Name: {products.name}</p>
                    <p>Price: {products.price}</p>
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
                <button onClick={() => deleteProduct(products.id)}>Delete Product</button>
            </div>
        ))}
    </div>
  )
}

export default ProductList;