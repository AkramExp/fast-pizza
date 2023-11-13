import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
