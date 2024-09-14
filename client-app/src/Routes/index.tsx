import {
  createBrowserRouter,
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
        ],
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
