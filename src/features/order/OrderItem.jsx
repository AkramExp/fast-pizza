import React from "react";
import { formatCurrency } from "../../../helpers";

export default function OrderItem({ pizza }) {
  const { name, quantity, totalPrice } = pizza;

  return (
    <li className="flex justify-between items-center text-sm space-y-6">
      <p>
        <span className="font-semibold">{quantity}x</span> {name}
      </p>
      <p className="font-semibold">{formatCurrency(totalPrice)}</p>
    </li>
  );
}
