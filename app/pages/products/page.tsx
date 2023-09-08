'use client'
import React from 'react'
import { useState ,useEffect} from 'react'
import { GET } from "../../../utils/http";

type Props = {}

function Products({}: Props) {

const [products,setProducts]=useState<any[]>([]);

useEffect(() => {
  async function fetchProducts() {
    try {
      const response = await GET("https://dummyjson.com/products");
      console.log('response',response)
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  fetchProducts();
}, []);

  return (
    <div className='gallery'>
    {products.length > 0 ? (
      products.map((product: any) => (
        <div className="content" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h6>${product.price.toFixed(0)}</h6>
          <ul>
            <li>
             
               {product.rating}
            </li>
          </ul>
         <button className='buy'>Buy Now</button>
        </div>
        
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
  )
}

export default Products