import React from "react";
import { formatCurrency } from "../../../helpers";

export default function OrderItem({ pizza }) {
  const { name, quantity, totalPrice } = pizza;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-semibold">{quantity}x</span> {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}
