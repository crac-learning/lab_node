import React from 'react';
import Sidebar from '../../../Components/Shop/AccountSettings/Sidebar';
import { Outlet } from 'react-router-dom';

const MyProfile : React.FC = () => {
  return (
    <div className="flex p-6">
      
      <Sidebar />
      <Outlet /> {/* This will render the specific component based on the route */}
    </div>
  );
};

export default MyProfile;
