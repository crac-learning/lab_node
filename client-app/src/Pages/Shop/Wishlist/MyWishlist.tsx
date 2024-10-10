import React from 'react'
import { IProduct } from 'Utils/types';

import image1 from "../../../Assets/images/order_1.png"
import image2 from "../../../Assets/images/product_2.png"
import image3 from "../../../Assets/images/product_3.png"
import ProductBox from 'Components/Shop/ProductBox';

const wishlistProducts: IProduct[] = [
  // Sample product data
  {
    sku: '123', title: 'Product 1', banner: image1 , price: 100,
    _id: '',
    images: [],
    description: '',
    mrp: 0,
    category: '',
    gender: '',
    originalLink: '',
    reviews: []
  },
  {
    sku: '124', title: 'Product 2', banner: image2, price: 200,
    _id: '',
    images: [],
    description: '',
    mrp: 0,
    category: '',
    gender: '',
    originalLink: '',
    reviews: []
  },
  {
    sku: '125', title: 'Product 3', banner: image3, price: 300,
    _id: '',
    images: [],
    description: '',
    mrp: 0,
    category: '',
    gender: '',
    originalLink: '',
    reviews: []
  },
  {
    sku: '124', title: 'Product 2', banner: image2, price: 450,
    _id: '',
    images: [],
    description: '',
    mrp: 0,
    category: '',
    gender: '',
    originalLink: '',
    reviews: []
  },    
  // Add more products here...
];


const MyWishlist : React.FC = () => {
    return (
        <div className="bg-white text-left flex flex-col w-full">
        <div className='flex justify-between mb-4 items-center'>
          <h2 className="text-xl font-medium mb-4 text-black">Your Wishlist</h2>
        </div>
  
        <div className='flex gap-6 '>
        {wishlistProducts.map((product) => (
          <ProductBox product={product} key={product.sku} />
        ))}
        </div>
  
      </div>
    )
}

export default MyWishlist;