import { Link, Typography } from '@mui/material';
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation } from 'react-router-dom';



const AccountBreadCrumbs: React.FC = () => {

  const location = useLocation();
  const breadcrumbs = [];

  // Generate breadcrumbs based on the current route
  if (location.pathname.includes('profile')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/" sx={{textDecoration : "none"}}>Home</Link>);
    breadcrumbs.push(<Link key="my-account" color="inherit" href="profile" sx={{textDecoration : "none"}}> My Account</Link>);
    breadcrumbs.push(<Typography key="profile" sx={{ fontWeight: "bold"}}>Profile</Typography>);
  } else if (location.pathname.includes('address')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/" sx={{textDecoration : "none"}}>Home</Link>);
    breadcrumbs.push(<Link key="my-account" color="inherit" href="profile" sx={{textDecoration : "none"}}> My Account</Link>);
    breadcrumbs.push(<Typography key="address-book" sx={{ fontWeight: "bold"}}>Address Book</Typography>);
  } else if (location.pathname.includes('payment')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/" sx={{textDecoration : "none"}}>Home</Link>);
    breadcrumbs.push(<Link key="my-account" color="inherit" href="profile" sx={{textDecoration : "none"}}> My Account</Link>);
    breadcrumbs.push(<Typography key="payment-options" sx={{ color: 'text.primary' }}>My Payment Options</Typography>);
  } else if (location.pathname.includes('orders')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/"  sx={{textDecoration : "none"}}>Home</Link>);
    breadcrumbs.push(<Link key="orders" color="inherit" href="orders"  sx={{textDecoration : "none"}}>My Orders</Link>);
    breadcrumbs.push(<Typography key="my-orders" sx={{ fontWeight: "bold"}}>My Orders</Typography>);
  } else if (location.pathname.includes('returns')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/"  sx={{textDecoration : "none"}}>Home</Link>);
    breadcrumbs.push(<Link key="orders" color="inherit" href="orders"  sx={{textDecoration : "none"}}>My Orders</Link>);
    breadcrumbs.push(<Typography key="my-returns" sx={{ fontWeight: "bold"}}>My Returns</Typography>);
  } else if (location.pathname.includes('wishlist')) {
    breadcrumbs.push(<Link key="home" color="inherit" href="/"  sx={{textDecoration : "none"}}>Home</Link>);
    breadcrumbs.push(<Typography key="my-wishlist" sx={{ fontWeight: "bold"}}>My Wishlist</Typography>);
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