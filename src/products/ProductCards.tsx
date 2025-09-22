import React from 'react'
import AddCartButton from './AddCartButton'
import { Link } from 'react-router-dom'
import type { Product } from '../types'


interface ProductCardProps {
  products: Product[];
  category: string
}


const ProductCards:React.FC<ProductCardProps> = ({ products, category }) => {

  return (
    <>
      {products
        .filter(product => category === 'All Products' || product.category === category)
        .map((product) => (

        <div
            className='flex flex-col justify-center border-1 p-3 
              bg-gradient-to-tr from-zinc-900 via-zinc-800 to-cyan-900'
            key={product.id}>
            <Link to={`/productdetail/${product.id}`}>
            <img src={product.image}
              className='w-75 border p-1'
              alt={product.name} />
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            </Link>
            <AddCartButton product={product} />
          </div>

      ))}
    </>
  )
}

export default ProductCards