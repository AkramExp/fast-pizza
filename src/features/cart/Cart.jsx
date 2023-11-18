import React from "react";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";

export default function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="-1">&larr; Back to Menu</LinkButton>
      <h1 className="mt-8 font-semibold text-xl mb-4">Your Cart, Akram</h1>
      <ul className="divide-y divide-stone-200 border-b">
        {cart.map((pizza) => (
          <CartItem pizza={pizza} key={pizza.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-3">
        <Button type="primary" to="/order/new">
          Order Pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear Cart{" "}
        </Button>
      </div>
    </div>
  );
}
