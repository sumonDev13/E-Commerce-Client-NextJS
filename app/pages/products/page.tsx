'use client'
import React from 'react'
import { useState ,useEffect} from 'react'

type Props = {}

function Products({}: Props) {

const [products,setProducts]=useState<any[]>([]);

useEffect(() => {
  async function fetchProducts() {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      console.log('data',data)
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  fetchProducts();
}, []);

  return (
    <div>
    <h1>Products List</h1>
    {products.length > 0 ? (
      products.map((product: any) => (
        <div className="card" key={product.id}>
          <img src={product.images[0]} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Price: ${product.price.toFixed(2)}</p>
          <div className='card_buttons'>
          <button>Buy</button>
          <button>description</button>
          </div>
        </div>
        
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
  )
}

export default Products