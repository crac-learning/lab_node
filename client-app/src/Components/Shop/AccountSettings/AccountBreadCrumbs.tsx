import { Link, Typography } from '@mui/material';
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation } from 'react-router-dom';



const AccountBreadCrumbs: React.FC = () => {

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
    <div>
      <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs}
      </Breadcrumbs>
    </div>
  )
}

export default AccountBreadCrumbs;