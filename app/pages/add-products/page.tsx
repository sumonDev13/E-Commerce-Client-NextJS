'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { POST } from '@/utils/http';

interface ProductData {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

function AddProducts() {
  const [productData, setProductData] = useState<ProductData>({
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await POST('https://fakestoreapi.com/products', productData);
      console.log('Response:', response);
      alert('Product added');
      setProductData({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Want to add product?</h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={productData.image}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProducts;
