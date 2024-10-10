import React from 'react';
import Sidebar from '../../../Components/Shop/AccountSettings/Sidebar';
import { Outlet } from 'react-router-dom';
import AccountBreadCrumbs from 'Components/Shop/AccountSettings/AccountBreadCrumbs';

const MyProfile: React.FC = () => {
  return (
    <div className="container m-auto">

      <div className="flex justify-between items-center m-8">
        <div>
          <AccountBreadCrumbs />
        </div>

        {/* Welcome message at the top-right */}
        <div className="text-right mb-4">
          Welcome <span className="text-[#9077D2]">User123!</span>
        </div>
      </div>

      <div className='flex w-full'>

      <div className='w-1/3'>
        <Sidebar />

      </div>
    
      {/* Main content area with full width */}
     

        <div className="flex w-2/3 bg-white pr-12">
          <Outlet />
     
      </div>


      </div>
    </div>
  );
};

export default MyProfile;
