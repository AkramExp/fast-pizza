import React from "react";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../../helpers";
import OrderItem from "./OrderItem";

export default function Order() {
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap justify-between items-center gap-3">
        <h1 className="font-semibold text-xl">Order #{id} status</h1>
        <div className="space-x-4">
          {priority && (
            <span className="bg-red-500 text-red-100 px-3 py-1 rounded-full uppercase">
              Priority
            </span>
          )}
          <span className="bg-green-500 text-green-100 px-3 py-1 rounded-full uppercase">
            {status} Order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 items-center justify-between bg-stone-200 px-6 py-6">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😀`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y border-t border-b">
        {cart.map((item) => (
          <OrderItem pizza={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="bg-stone-200 space-y-2 px-6 py-6">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        <p className="text-sm font-medium text-stone-600">
          Price priority: {formatCurrency(priorityPrice)}
        </p>
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
