import AddressField from 'Components/Shop/AccountSettings/AddressField';
import React from 'react';

const AddressBook: React.FC = () => {
  return (
    <div className="w-3/4 bg-white p-8 text-left flex flex-col">
      <div className='flex justify-between mb-4 items-center'>
        <h2 className="text-xl font-semibold mb-4 text-black">Your Addresses</h2>
        <div><button className='text-sky-600 bg-transparent border-blue-500'>+ Add New Address</button></div>
      </div>

      <div className='flex flex-col gap-6'>
        <AddressField title='Home' address='345P-34, Sector 45, Near main market' state='Haryana' city='Gurgaon' pincode='122003' />
        <AddressField title='Office Address' address='5th Floor, Horizon one centre, Golf course road' state='Haryana' city='Gurgaon' pincode='122002' />
      </div>

    </div>
  );
};

export default AddressBook;
