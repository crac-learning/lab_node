import React from 'react';
import NavLinkComponent from './SidebarField';

const Sidebar: React.FC = () => {

  return (
    <div className="w-full bg-white py-4 pl-12">     
        <div className="font-bold mb-4 text-black text-left">Manage My Account</div>
        <div className="flex flex-col space-y-2 text-left pl-6">
          <NavLinkComponent to='profile' label='Profile' />
          <NavLinkComponent to='address' label='Address Book' />
          <NavLinkComponent to='payment' label='My Payment Options' />
        </div>

        <div className="font-bold mb-4 text-black text-left mt-4">My Orders</div>
        <div className="flex flex-col space-y-2 text-left pl-6">
          <NavLinkComponent to='orders' label='My Orders' />
          <NavLinkComponent to='returns' label='My Returns' />
        </div>

        <div className="font-bold mb-4 text-black text-left mt-4">My Wishlist</div>
        <div className="flex flex-col space-y-2 text-left pl-6">
          <NavLinkComponent to='wishlist' label='My Wishlist' />
        </div>
    </div>
  );
};

export default Sidebar;
