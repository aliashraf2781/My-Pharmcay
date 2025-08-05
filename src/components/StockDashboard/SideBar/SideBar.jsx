import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="py-8 bg-primary sticky top-0 bottom-0 h-[100vh] w-full ">
      <nav className="flex flex-col gap-3 justify content stretch">
        <NavLink to="profile" className="dashboard-nav-link">
          Profile
        </NavLink>
        <NavLink to="medicines" className="dashboard-nav-link">
          Medicines
        </NavLink>
        <NavLink to="orders" className="dashboard-nav-link">
          Orders
        </NavLink>
      </nav>
    </aside>
  );
}
