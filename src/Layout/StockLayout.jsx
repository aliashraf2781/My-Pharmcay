import React from "react";
import ProfileCard from "../components/StockDashboard/ProfileCard/ProfileCard";
import { Outlet } from "react-router-dom";
import SideBar from "./../components/StockDashboard/SideBar/SideBar";

export default function StockLayout() {
  return (
    <main className="grid grid-cols-10">
      <section className="col-span-2 relative hidden md:block">
        <SideBar />
      </section>
      <section className="col-span-10 md:col-span-8 ">
        <Outlet />
      </section>
    </main>
  );
}
