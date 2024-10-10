import { Link } from '@mui/material';
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import { useLocation } from 'react-router-dom';



const CartCrumbsComponent: React.FC = () => {

//   const location = useLocation();
  const breadcrumbs = [];

  breadcrumbs.push(<Link key="home" color="inherit" href="./">Home</Link>);
  breadcrumbs.push(<Link key="cart" color="inherit" href="cart" sx={{color: "black"}}>Cart</Link>);

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

export default CartCrumbsComponent;