import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
// import Navhar from "./Navhar";

function Layout() {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
