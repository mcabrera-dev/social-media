import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
