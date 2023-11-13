import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-5 py-3 bg-yellow-500">
      <Link to="/" className="tracking-widest uppercase">
        Fast Pizza
      </Link>
      <SearchOrder />
      <Username />
    </nav>
  );
}
