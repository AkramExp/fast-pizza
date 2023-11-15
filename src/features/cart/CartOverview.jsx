import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../../helpers";

export default function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <footer className="flex bg-stone-800 text-stone-200 justify-between items-center px-4 py-4 uppercase text-sm">
      <p className="space-x-4 font-semibold">
        <span>{totalCartQuantity} Pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <div>
        <Link to="cart">Open Cart &rarr;</Link>
      </div>
    </footer>
  );
}
