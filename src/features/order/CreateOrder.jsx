import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import Button from "../../ui/Button";
import { formatCurrency } from "../../../helpers";
import { createOrder } from "../../services/apiRestaurant";
import store from "../../../store";
import EmptyCart from "../cart/EmptyCart";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export default function CreateOrder() {
  const { username } = useSelector((state) => state.user);
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const totalPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;
  const finalPrice = totalPrice + priorityPrice;
  const formErrors = useActionData();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-2 py-6">
      <h1 className="font-medium text-xl mb-8">Ready to order? Lets go!</h1>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="" className="sm:basis-40">
            First Name
          </label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input grow sm:py-3"
          />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="" className="sm:basis-40">
            Phone Number
          </label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              className="input w-full sm:py-3"
            />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="" className="sm:basis-40">
            Address
          </label>
          <input
            type="text"
            name="address"
            required
            className="input grow sm:py-3"
          />
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            defaultValue={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-[1.5rem] w-6 accent-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>
        <div className="mt-10">
          <input hidden name="cart" defaultValue={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing Order..."
              : `Order now for ${formatCurrency(finalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(data.phone)) errors.phone = "Provide right phone number";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
