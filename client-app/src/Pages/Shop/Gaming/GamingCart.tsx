import React, { useState } from 'react';
import cart_img_1 from "../../../Assets/images/cart_img_1.png";
import cart_img_2 from "../../../Assets/images/cart_img_2.png";
import CartCrumbsComponent from 'Components/Shop/Gaming/Cart/CartCrumbsComponent';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { CHECKOUT } from 'Routes/constant';
import { BillingField } from 'Components/Shop/Gaming/Cart/BillingFields';


const initialList = [
  {
    product: "LCD Monitor",
    image: cart_img_1,
    price: 650,
    quantity: 1,
  },
  {
    product: "H1 Gamepad",
    image: cart_img_2,
    price: 550,
    quantity: 2,
  },
];

const GamingCart: React.FC = () => {

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(initialList);

  const handleUpArrow = (index: number) => {

    const updatedCart = [...initialList];
    updatedCart[index].quantity += 1
    setCartItems(updatedCart);

  }

  const handleDownArrow = (index: number) => {

    const updatedCart = [...initialList];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1
      setCartItems(updatedCart);
    }
  }

  // Calculate subtotal sum
  const sum = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="container mx-auto my-8">

      <div className="flex justify-between items-center m-8">
        <div>
          <CartCrumbsComponent />
        </div>

        {/* Welcome message at the top-right */}
        <div className="text-right mb-4">
          Welcome <span className="text-[#9077D2]">User123!</span>
        </div>
      </div>



      {/* Column headers */}
      <div className="grid grid-cols-4 text-center font-semibold p-4 border-b border-[#0000000D] text-black ">
        <p className='text-left'>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {/* Cart items */}
      {initialList.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 text-center items-center p-4 font-medium border-b border-[#0000000D] text-black"
        >
          {/* Product details */}
          <div className="flex items-center justify-start">
            {/* Image */}
            <img
              src={item.image}
              alt={item.product}
              className="h-12 w-12   object-contain"
            />
            {/* Product title */}
            <p className="ml-4">{item.product}</p>
          </div>

          {/* Price */}
          <p>${item.price}</p>

          {/* Quantity */}
          <div className='flex items-center justify-center'>

            <div className='flex py-3 w-[100px] rounded border-2 border-black items-center justify-around'>
              <div>
                0{item.quantity}
              </div>
              <div className='flex flex-col '>
                <IoIosArrowUp onClick={() => handleUpArrow(index)} className='cursor-pointer' />
                <IoIosArrowDown onClick={() => handleDownArrow(index)} className='cursor-pointer' />
              </div>
            </div>
          </div>

          {/* Subtotal */}
          <p>${item.quantity * item.price}</p>
        </div>
      ))}
      <div className='flex justify-between mt-8 text-black font-semibold items-center'>
        <div className='flex py-4 px-12  border rounded-md'> Return To Shop</div>
        <div className='flex py-4 px-12 border rounded-md'> Update Cart</div>
      </div>


      {/* final cart total section */}
      <div className='flex justify-end mt-12'>
        <div className='flex border-2 rounded-md p-8 mt-2 border-black flex-col items-start text-black font-medium gap-4 w-full md:w-3/4 lg:w-1/3 text-base'>
          <div className='font-semibold text-xl'>Cart Total</div>
         <BillingField label='Subtotal' value={sum.toString()} />
         <hr className='h-[1px] border-0 w-full bg-black' />
         <BillingField label='Shipping' value='Free' />
         <hr className='h-[1px] border-0 w-full bg-black' />
         <BillingField label='Total' value={sum.toString()} />
          
          <div className="flex m-auto">
            <button className=" bg-[#9077D2] text-white py-3 px-12 font-semibold rounded-md justify-center" onClick={() =>
              navigate(CHECKOUT)
            }>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingCart;