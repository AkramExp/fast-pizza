import React from "react";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../../helpers";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";
import { getCurrentQuantityById } from "./cartSlice";

export default function CartItem({ pizza }) {
  const { pizzaId, name, quantity, totalPrice } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="py-3 flex items-center justify-between">
      <p>
        {quantity} x {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="font-semibold text-sm">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </div>
  );
}
