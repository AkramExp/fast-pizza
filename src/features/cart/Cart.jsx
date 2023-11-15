import React from "react";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-3 py-2">
      <LinkButton to="-1">&larr; Back to Menu</LinkButton>
      <h1 className="mt-8 font-semibold text-lg mb-4">Your Cart, Akram</h1>
      <ul className="divide-y divide-stone-200 border-b">
        {cart.map((pizza) => (
          <CartItem pizza={pizza} key={pizza.pizzaId} />
        ))}
      </ul>
    </div>
  );
}
