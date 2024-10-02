import {FormInput} from 'Components/Shop/AccountSettings/FormFields';
import React from 'react';
import { IoPersonSharp } from 'react-icons/io5';

const ProfileForm: React.FC = () => {
  return (
    <div className="w-3/4 bg-white p-8 text-left flex flex-col">
      <div className="text-xl font-semibold mb-4 text-sky-600">Edit Your Profile</div>
      {/* file/ image upload section */}
      <div className='rounded-lg'>
      <IoPersonSharp  className='text-white border bg-blue-500 size-52 rounded-full p-8'/>
      </div>
      

      <form className="space-y-4">

        <FormInput type="text" placeholder="Full Name" label="Full Name" />
        <FormInput type='email' placeholder='email@example.com' label='Email' />
        
        <div className="text-lg font-semibold mt-6">Password Changes</div>
        <FormInput type='password' placeholder='Curent Password'  />
        <FormInput type='password' placeholder='New Password'  />
        <FormInput type='password' placeholder='Confirm New Password' />


        <div className="flex space-x-4 mt-4 justify-end">
          <button type="button" className="text-gray-500 bg-transparent font-semibold">Cancel</button>
          <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded-md">Save Changes</button>
        </div>  
      </form>
    </div>
  );
};

export default ProfileForm;
