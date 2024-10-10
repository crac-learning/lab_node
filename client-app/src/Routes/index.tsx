import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from "react-router-dom";

import { LOCAL_TOKEN } from "Config/constants";

import {
  HOME,
  AUTH,
  LOGIN,
  SIGNUP,
  SHOP,
  FORHIM,
  FORHER,
  ACCESSORIES,
  FOOTWEAR,
  ACCOUNT_SETTINGS,
  PROFILE,
  ADDRESS_BOOK,
  PAYMENT_OPTIONS,
  ORDERS,
  WISHLIST,
  RETURNS,
  GAMING,
  GAMING_PROD,
  GAMING_CART,
  CHECKOUT,
} from "./constant";

import Home from "Pages/Home";
import Auth from "Pages/Auth";
import Login from "Pages/Auth/Login";
import Signup from "Pages/Auth/Signup";
import Shop from "Pages/Shop";
import ForHim from "Pages/Shop/ForHim";
import ForHer from "Pages/Shop/ForHer";
import Accessories from "Pages/Shop/Accessories";
import Footwear from "Pages/Shop/Footwear";
import ShopHome from "Pages/Shop/ShopHome";
import MyProfile from "Pages/Shop/AccountSettings/MyProfile";
import AddressBook from "Pages/Shop/AccountSettings/AddressBook";
import PaymentOptions from "Pages/Shop/AccountSettings/PaymentOptions";
import ProfileForm from "Pages/Shop/AccountSettings/ProfileForm";
import MyOrders from "Pages/Shop/Orders/MyOrders";
import Returns from "Pages/Shop/Orders/Returns";
import MyWishlist from "Pages/Shop/Wishlist/MyWishlist";
import Gaming from "Pages/Shop/Gaming/Gaming";
import GamingProduct from "Pages/Shop/Gaming/GamingProduct";
import GamingCart from "Pages/Shop/Gaming/GamingCart";
import Checkout from "Pages/Shop/Gaming/CheckOut";

const router = createBrowserRouter([
  {
    errorElement: <div>Error Occurred</div>,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: AUTH,
        element: <Auth />,
        loader: () => {
          if (localStorage.getItem(LOCAL_TOKEN)) {
            return redirect(SHOP);
          }
          return null;
        },
        children: [
          { path: SIGNUP, element: <Signup /> },
          { path: LOGIN, element: <Login /> },
        ],
      },
      {
        path: SHOP,
        loader: () => {
          if (!localStorage.getItem(LOCAL_TOKEN)) {
            return redirect(`${LOGIN}`);
          }
          return null;
        },
        element: <Shop />,
        children: [
          { path: SHOP, element: <ShopHome /> },
          { path: FORHIM, element: <ForHim /> },
          { path: FORHER, element: <ForHer /> },
          { path: ACCESSORIES, element: <Accessories /> },
          { path: FOOTWEAR, element: <Footwear /> },
          { path: FOOTWEAR, element: <Footwear /> },
          {
            path: ACCOUNT_SETTINGS, element: <MyProfile />, children: [
              { path: PROFILE, element: <ProfileForm /> },
              { path: ADDRESS_BOOK, element: <AddressBook /> },
              { path: PAYMENT_OPTIONS, element: <PaymentOptions /> },
              { path: ORDERS, element: <MyOrders /> },
              { path: RETURNS, element: <Returns/> },
              { path: WISHLIST, element: <MyWishlist /> },
              {path: "", element : <Navigate to = {PROFILE} replace/> } 
            ]
          },
          {
            path: GAMING, element: <Gaming />, children: [
              { path: GAMING_PROD, element: <GamingProduct /> },
              
              // { path: "", element: <Navigate to={GAMING} replace /> }
            ]
          },
          {
            path : GAMING_CART, element: <GamingCart/>
          },
          {
            path : CHECKOUT, element : <Checkout/>
          }
        ],
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
