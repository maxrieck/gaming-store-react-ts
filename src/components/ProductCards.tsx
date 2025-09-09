import React from 'react'
import AddCartButton from './AddCartButton'


const ProductCards:React.FC = ({ products }) => {

  return (
    <>
    {products.map((product) => (
            <div 
            className='flex flex-col justify-center border-1 p-3 bg-gradient-to-tr from-gray-900 via-zinc-800 to-cyan-900'
            key={product.id}>
                <img src={product.image} 
                className='w-75'
                alt="" />
                <h4>{product.name}</h4>                
                <p>Price: ${product.price}</p>
                {/* <p>{product.description}</p> */}
                <AddCartButton product={product} />
            </div>
        ))}
    </>
  )
}

export default ProductCards