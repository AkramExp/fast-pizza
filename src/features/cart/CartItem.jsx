import React from "react";

export default function CartItem({ pizza }) {
  const { pizzaId, name, quantity, totalPrice } = pizza;

  return (
    <div>
      {quantity} x {name}
    </div>
  );
}
