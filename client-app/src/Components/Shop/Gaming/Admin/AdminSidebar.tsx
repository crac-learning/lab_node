import React from 'react';
import NavLinkAdmin from './NavLinkAdmin';

const AdminSidebar: React.FC = () => {

  return (
    <div className="w-full bg-white py-4 pl-12">     

        <div className="flex flex-col space-y-2 text-left pl-6">
          <NavLinkAdmin to='products' label='Products' />
          <NavLinkAdmin to='orders' label='Orders' />
          <NavLinkAdmin to='coupons' label='Coupons' />
        </div>
    </div>
  );
};

export default AdminSidebar;
