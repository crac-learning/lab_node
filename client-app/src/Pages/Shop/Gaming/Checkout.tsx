import React, { useState } from 'react';
import cart_img_1 from "../../../Assets/images/cart_img_1.png";
import cart_img_2 from "../../../Assets/images/cart_img_2.png";
import { FormInput } from 'Components/Shop/AccountSettings/FormFields';
import CheckoutCrumbsComponent from 'Components/Shop/Gaming/Cart/CheckoutCrumbsComponent';
import { BillingField } from 'Components/Shop/Gaming/Cart/BillingFields';

// images
import bank_1 from "../../../Assets/images/bank_1.png";
import bank_2 from "../../../Assets/images/bank_2.png";
import bank_3 from "../../../Assets/images/bank_3.png";
import bank_4 from "../../../Assets/images/bank_4.png";


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

const Checkout: React.FC = () => {

  const [cartItems, setCartItems] = useState(initialList);
  const [saveInfo, setSaveInfo] = useState<boolean>(false); // State for checkbox
  const [paymentMethod, setPaymentMethod] = useState<string>('cod'); // State for payment method
  

  // Calculate subtotal sum
  const sum = cartItems.reduce((acc: number, item) => acc + item.quantity * item.price, 0);

  // Handle checkbox toggle
  const handleCheckboxChange = () => {
    setSaveInfo(!saveInfo);
  };

   // Handle Payment Method Toggle
   const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <div className="container mx-auto my-8">

      <div className="flex justify-between  items-center m-8">
        <div>
          <CheckoutCrumbsComponent />
        </div>

        <div className="text-right mb-4">
          Welcome <span className="text-[#9077D2]">User123!</span>
        </div>
      </div>



      <div className='flex text-black m-8 justify-between'>
        <div className='flex w-[40%] flex-col '>
          <div className='flex font-semibold text-[36px] mb-8'>Billing Details</div>
          <form className='space-y-4'>
            <FormInput type='text' placeholder='' label='First Name' />
            <FormInput type='text' placeholder='' label='Company Name' />
            <FormInput label='Street Address' type='text' placeholder='' />
            <FormInput label='Apartment, floor, etc. (optional)' type='text' placeholder='' />
            <FormInput label='Town/ City' type='text' placeholder='' />
            <FormInput label='Phone Number' type='text' placeholder='' />
            <FormInput label='Email Address' type='email' placeholder='' />
            {/* Checkbox for saving information */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="saveInfoCheckbox"
                checked={saveInfo}
                onChange={handleCheckboxChange}
                className="w-6 h-6 relative bg-[#9077D2] appearance-none border-none rounded checked:bg-[#9077D2] checked:text-white checked:border-white focus:ring-0 focus:outline-none"
              />
              <label htmlFor="saveInfoCheckbox" className="ml-2 text-base ">
                Save this information for faster check-out next time
              </label>
              <style>
                {`
                input[type="checkbox"]:checked::before 
                {
                  content: '\\2714'; /* Unicode for checkmark */
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  color: white;
                  font-size: 1rem;
                }
              `}
              </style>

            </div>
          </form>

        </div>

        <div className='w-1/2 flex flex-col mt-20 text-black font-medium p-12'>
          {initialList.map((item, index) => (
            <div className="flex w-full mb-8" key={index}>
              {/* Product Image */}
              <div className='flex justify-between items-center w-full '>
                <div className='flex gap-6'>
                  <img
                    src={item.image}
                    alt={item.product}
                    className="h-12 w-12 object-contain"

                  />
                  {/* Product title */}
                  <div className='flex items-center'>
                    <p className="">{item.product}</p>
                  </div>
                </div>
                {/* Product Price */}
                <div className='flex items-center'>
                  <p>${item.price}</p>
                </div>

              </div>
            </div>

          ))}

          {/* cart final details */}

          <div className='flex flex-col mt-2 gap-4 mb-8'>

          <BillingField label='Subtotal' value={sum.toString()} />
          <hr className='h-[1px] border-0 w-full bg-black' />
          <BillingField label='Shipping' value='Free' />
          <hr className='h-[1px] border-0 w-full bg-black' />
          <BillingField label='Total' value={sum.toString()} />
          </div>

          {/* mode of payment details */}

          <div className='flex w-full flex-col gap-4 text-black font-medium mt-2 mb-8'>
            <div className='flex justify-between items-center '>
              {/* BANK */}
                <div className='flex gap-2 items-center'>
                  <div className={`w-6 h-6 rounded-full border border-black ${paymentMethod === 'bank' ? 'relative flex items-center justify-center': ''} `}
                  onClick={()=> handlePaymentMethodChange('bank')}>
                    {paymentMethod === 'bank' && (
                      <div className='absolute w-[14px] h-[14px] bg-black rounded-full'></div>
                    )}

                  </div>
                  <div>Bank</div>
                </div>
                <div className='flex gap-2'>
                  {/* images of banks */}
                  <div style={{backgroundImage : `url(${bank_1})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat", width: '50px', height: '40px'}}></div>
                  <div className='my-2' style={{backgroundImage : `url(${bank_2})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat", width: '50px', height: '40px'}}></div>
                  <div style={{backgroundImage : `url(${bank_3})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat", width: '50px', height: '40px'}}></div>
                  <div style={{backgroundImage : `url(${bank_4})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat", width: '50px', height: '40px'}}></div>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
              {/* COD */}
              <div
                className={`w-6 h-6 rounded-full border border-black ${paymentMethod === 'cod' ? 'relative flex items-center justify-center' : ''}`}
                onClick={() => handlePaymentMethodChange('cod')}
              >
                {paymentMethod === 'cod' && (
                  <div className='absolute w-[14px] h-[14px] bg-black rounded-full'></div>
                )}
              </div>
              <div>Cash on Delivery</div>
            </div>
          </div>  
          


          {/* coupon section */}
          <div className='flex w-[110%] gap-2 justify-between mb-8 items-center font-semibold'>
            <input type='text' placeholder='Coupon Code' className='w-[56%] border border-black rounded bg-white px-6 py-4'/>
            <div className='bg-[#9077D2] p-4 rounded w-[40%] text-white'>Apply Coupon</div>
          </div>

          <div className='flex w-full'>
             
          </div><div className='bg-[#9077D2] p-4 rounded w-1/3 text-white'>Place Order</div>

        </div>
      </div>




    </div>
  );
};

export default Checkout;