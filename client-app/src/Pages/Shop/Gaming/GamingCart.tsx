import React from 'react';
import cart_img_1 from "../../../Assets/images/cart_img_1.png";
import cart_img_2 from "../../../Assets/images/cart_img_2.png";
import CartCrumbsComponent from 'Components/Shop/Gaming/Cart/CartCrumbsComponent';


const list = [
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
      <div className="grid grid-cols-4 text-center font-semibold p-4  text-black ">
        <p className='text-left'>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {/* Cart items */}
      {list.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 text-center items-center p-4 font-medium  text-black"
        >
          {/* Product details */}
          <div className="flex items-center justify-start">
            {/* Image */}
            <img
              src={item.image}
              alt={item.product}
              className="h-16 w-16 object-contain"
            />
            {/* Product title */}
            <p className="ml-4">{item.product}</p>
          </div>

          {/* Price */}
          <p>${item.price}</p>

          {/* Quantity */}
          <p>{item.quantity}</p>

          {/* Subtotal */}
          <p>${item.quantity * item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default GamingCart;
