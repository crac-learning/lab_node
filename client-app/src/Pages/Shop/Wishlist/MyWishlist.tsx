import React from 'react'


const MyWishlist: React.FC = () => {
    return (
        <div className="bg-white text-left flex flex-col">
        <div className='flex justify-between mb-4 items-center'>
          <h2 className="text-xl font-semibold mb-4 text-black">Your Wishlist</h2>
        </div>
  
        <div className='flex flex-col gap-6'>
          {/* <OrderField image ={order1_img} title='HAVIT HV-G92 Gamepad' address='345P-34, Sector 45, Near main market' state='Haryana' city='Gurgaon' pincode='122003' price='4500' /> */}
          {/* <OrderField image ={order1_img} title='Office Address' address='5th Floor, Horizon one centre, Golf course road' state='Haryana' city='Gurgaon' pincode='122002' price='6000' /> */}
        </div>
  
      </div>
    )
}

export default MyWishlist;