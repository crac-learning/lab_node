import {FormInput} from 'Components/Shop/AccountSettings/FormFields';
import React  from 'react';
import { RxPerson } from "react-icons/rx";

const ProfileForm: React.FC = () => {
  return (
    <div className="bg-white p-8 text-left flex flex-col w-full">
      <div className="text-xl font-medium mb-4 text-[#9077D2]">Edit Your Profile</div>
      {/* file/ image upload section */}
      <div className='mb-4'>
      <RxPerson  className='text-white border bg-[#9077D2] size-[150px] rounded-full p-8'/>
      </div>
      

      <form className="space-y-4">

        <FormInput type="text" placeholder="Full Name" label="Full Name" />
        <FormInput type='email' placeholder='email@example.com' label='Email' />
      
        <FormInput label='Password Changes' type='password' placeholder='Curent Password'  />
        <FormInput type='password' placeholder='New Password'  />
        <FormInput type='password' placeholder='Confirm New Password' />


        <div className="flex space-x-4 mt-4 justify-end">
          <button type="button" className="text-black bg-transparent font-normal">Cancel</button>
          <button type="submit" className="bg-[#9077D2] text-white px-12 py-4 font-medium rounded-md">Save</button>
        </div>  
      </form>
    </div>
  );
};

export default ProfileForm;
