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
      products.map((item: any, index: number) => (
        <h1 key={index}>Name : {item.title}</h1>
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
  )
}

export default Products