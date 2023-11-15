import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="mt-3">
      <LinkButton to="-1">&larr; Back to Menu</LinkButton>
      <h1 className="mt-8 font-semibold text-lg mb-8">Your Cart, Akram</h1>
      <ul className="divide-y divide-stone-400 border-b space-y-2">
        {cart.map((pizza) => (
          <CartItem pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}
