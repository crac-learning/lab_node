import { Link, Outlet } from "react-router-dom";

import DrawerComp from "Components/DrawerComp";
import ToggleButton from "Components/DrawerComp/ToggleButton";

import { HOME } from "Routes/constant";
import { useState } from "react";
import { Anchor } from "Components/DrawerComp/types";
import Learningsteps from "./learning";

import Logo from "Assets/images/logo.png";

function Auth() {
  const [drawerState, setDrawerState] = useState(false);
  const [drawerAnchor, setDrawerAnchor] = useState<Anchor>("left");

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawerState(false);
  };

  const openDrawer = (anchor: Anchor, flag: boolean) => {
    setDrawerAnchor(anchor);
    setDrawerState(flag);
  };

  return (
    <div className="w-screen h-screen">
      <div className="fixed top-0 bottom-0 -left-[96px] w-fit h-[46px] m-auto -rotate-90">
        <ToggleButton openDrawer={openDrawer} />
      </div>
      <DrawerComp
        open={drawerState}
        toggleDrawer={toggleDrawer}
        anchor={drawerAnchor}
        steps={Learningsteps}
      />
      <div className="header h-20 text-center border-b">
        <Link to={HOME}>
          <img src={Logo} alt="logo" className="h-full m-auto" />
        </Link>
      </div>
      <div style={{ height: "calc(100% - 120px)" }}>
        <Outlet />
      </div>
      <div className="footer h-10 text-sm text-slate-500 pt-2 border-t">
        Copyright © 2010-2024 Exclusive. All rights reserved.
      </div>
    </div>
  );
}

export default Auth;
