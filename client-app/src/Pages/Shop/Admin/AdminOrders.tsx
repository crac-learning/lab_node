import OrderField from 'Components/Shop/AccountSettings/OrderField'
import React from 'react'

import order1_img from "Assets/images/order_1.png";
import { CiSearch } from "react-icons/ci";  

const AdminOrders: React.FC = () => {
    return (
        <div className="bg-white text-left flex flex-col w-full">
        <div className='flex justify-between mb-4 items-center'>
          <h2 className="text-xl font-medium mb-4 text-[#9077D2]">Orders List</h2>
        </div>

        <div className='flex mb-10 rounded-md shadow-sm'>
          <div className='flex gap-2 py-2 pl-6 justify-center items-center text-black w-full rounded-md bg-[#f5f5f5]'>
            <CiSearch size={24}/>
            <input type="text" className='bg-[#f5f5f5] outline-none placeholder-gray-500 text-sm w-full' placeholder='Search order'/>
          </div>
        </div>
  
        <div className='flex flex-col gap-6'>
          <OrderField name='Rohit Kumar' contact='+91 8798237823' email='rohit.kumar@crac.com' image ={order1_img} title='HAVIT HV-G92 Gamepad' address='345P-34, Sector 45, Near main market' state='Haryana'  city='Gurgaon' pincode='122003' price={4500} quantity={1} />
          <OrderField name='Aman Sharma' contact='+91 7758007759' email='aman.sharma@crac.com' image ={order1_img} title='Office Address' address='5th Floor, Horizon one centre, Golf course road' state='Haryana' city='Gurgaon' pincode='122002' price={6000}  quantity={2} />
        </div>
  
      </div>
    )
}

export default AdminOrders