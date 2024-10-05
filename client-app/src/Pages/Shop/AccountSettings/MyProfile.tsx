import React from 'react';
import Sidebar from '../../../Components/Shop/AccountSettings/Sidebar';
import { Outlet } from 'react-router-dom';

const MyProfile: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />

      {/* Main content area with full width */}
      <div className="flex-1 p-6">
        {/* Welcome message at the top-right */}
        <div className="flex justify-between items-center mb-4">
          <div></div> {/* Empty div for balancing alignment */}
          <div className="text-right">
            Welcome <span className="text-blue-500">User123!</span>
          </div>
        </div>

        <div className="w-full bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
