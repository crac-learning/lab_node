import { Link } from '@mui/material';
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import { useLocation } from 'react-router-dom';



const CheckoutCrumbsComponent: React.FC = () => {

//   const location = useLocation();
  const breadcrumbs = [];

  breadcrumbs.push(<Link key="account" color="inherit" href="./" sx={{textDecoration: "none"}}>Account</Link>);
  breadcrumbs.push(<Link key="my-account" color="inherit" href="profile" sx={{textDecoration: "none"}}>My Account</Link>);
  breadcrumbs.push(<Link key="product" color="inherit" href="product" sx={{textDecoration: "none"}}>Product</Link>);
  breadcrumbs.push(<Link key="view_cart" color="inherit" href="cart" sx={{textDecoration: "none"}}>View Cart</Link>);
  breadcrumbs.push(<Link key="checkout" color="inherit" href="checkout" sx={{textDecoration: "none", fontWeight: "bold"}}>CheckOut</Link>);

//   // Generate breadcrumbs based on the current route
//   if (location.pathname.includes('product')) {
//     // breadcrumbs.push(<Link key="account" color="inherit" href="/">Account</Link>);
//     // breadcrumbs.push(<Link key="gaming" color="inherit" href="product">Gaming</Link>);
//     breadcrumbs.push(<Typography key="product" sx={{ color: 'black' }}>Havic HV G-92 Gamepad</Typography>);
//   }


  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs}
      </Breadcrumbs>
    </div>
  )
}

export default CheckoutCrumbsComponent;