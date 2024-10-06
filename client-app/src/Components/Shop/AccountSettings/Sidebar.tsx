import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import NavLinkComponent from './SidebarField';
import Link from '@mui/material/Link';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const breadcrumbs = [];

  // Generate breadcrumbs based on the current route
  if (location.pathname.includes('profile')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/">Home</Link>);
    breadcrumbs.push(<Link key="my-account" color="inherit" href="profile"> My Account</Link>);
    breadcrumbs.push(<Typography key="profile" sx={{ color: "inherit" }}>Profile</Typography>);
  } else if (location.pathname.includes('address')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/">Home</Link>);
    breadcrumbs.push(<Link key="my-account" color="inherit" href="profile"> My Account</Link>);
    breadcrumbs.push(<Typography key="address-book" sx={{ color: 'text.primary' }}>Address Book</Typography>);
  } else if (location.pathname.includes('payment')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/">Home</Link>);
    breadcrumbs.push(<Link key="my-account" color="inherit" href="profile"> My Account</Link>);
    breadcrumbs.push(<Typography key="payment-options" sx={{ color: 'text.primary' }}>My Payment Options</Typography>);
  } else if (location.pathname.includes('orders')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/">Home</Link>);
    breadcrumbs.push(<Link key="orders" color="inherit" href="orders">My Orders</Link>);
    breadcrumbs.push(<Typography key="my-orders" sx={{ color: 'text.primary' }}>My Orders</Typography>);
  } else if (location.pathname.includes('returns')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/">Home</Link>);
    breadcrumbs.push(<Link key="orders" color="inherit" href="orders">My Orders</Link>);
    breadcrumbs.push(<Typography key="my-returns" sx={{ color: 'text.primary' }}>My Returns</Typography>);
  } else if (location.pathname.includes('wishlist')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/">Home</Link>);
    breadcrumbs.push(<Typography key="my-wishlist" sx={{ color: 'text.primary' }}>My Wishlist</Typography>);
  }

  return (
    <div className="w-1/4 bg-white p-6">
      <div className="pl-4">
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>

        <div className="font-bold mb-4 text-black text-left mt-12">Manage My Account</div>
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
    </div>
  );
};

export default Sidebar;
