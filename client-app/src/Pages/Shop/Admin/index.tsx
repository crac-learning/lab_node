import React from 'react';
import { Outlet } from 'react-router-dom';
// import { IProduct } from 'Utils/types';

// import image1 from "../../../Assets/images/order_1.png"
// import image2 from "../../../Assets/images/product_2.png"
// import image3 from "../../../Assets/images/product_3.png"
import AdminSidebar from 'Components/Shop/Gaming/Admin/AdminSidebar';


const AdminHomePage: React.FC = () => {
  return (
    <div className="container m-auto">

      <div className='flex w-full'>

        <div className='w-[25%]'>
          <AdminSidebar />

        </div>

        {/* Main content area with full width */}
        <div className="flex w-full bg-white pr-12 m-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
