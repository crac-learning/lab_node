import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarGaming from 'Components/Shop/Gaming/SidebarGaming';
import ReviewContainer from 'Components/Shop/Gaming/ReviewContainer';
import { ProductReviews } from 'Components/Shop/Gaming/ProductReviews';
import { IProduct } from 'Utils/types';
import ProductBox from 'Components/Shop/ProductBox';

import image1 from "../../../Assets/images/order_1.png"
import image2 from "../../../Assets/images/product_2.png"
import image3 from "../../../Assets/images/product_3.png"
import BreadcrumbsComponent from 'Components/Shop/Gaming/BreadcrumbsComponent';


const wishlistProducts: IProduct[] = [
  // Sample product data
  {
    sku: '123', title: 'Product 1', banner: image1, price: 100,
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

const Gaming: React.FC = () => {
  return (
    <div className='container m-auto'>
      <div className="flex justify-between items-center m-8">
        <div>
          <BreadcrumbsComponent />
        </div>

        {/* Welcome message at the top-right */}
        <div className="text-right mb-4">
          Welcome <span className="text-[#9077D2]">User123!</span>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* first row for product image and details */}
        <div className='flex'>
          {/* side bar */}
          <div className='w-1/5'>
            <SidebarGaming />
          </div>

          {/* Main content area with full width */}
          <div className="bg-white w-4/5 pr-12">
            <Outlet />
          </div>

        </div>

        {/* product reviews section */}
        <div className='flex mt-2'>

          {/* write a review part */}
          <div className='pl-12 w-2/3'>

            <ReviewContainer />
          </div>
          <div className='w-1/3 pr-12'>
            <ProductReviews />
          </div>
        </div>

        {/* related items section */}
        <div className='flex flex-col pl-12 mt-4'>
          <div className='flex gap-2 flex-row items-center p-4 mb-12'>
            <div className='bg-[#9077D2] rounded-md h-10 w-5'></div>
            <div className='text-[#9077D2] font-bold'>Related items</div>
          </div>

          <div className='flex gap-6 '>
            {wishlistProducts.map((product) => (
              <ProductBox product={product} key={product.sku} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gaming;
