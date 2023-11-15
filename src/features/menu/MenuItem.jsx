import React from "react";
import Button from "../../ui/Button";
import { formatCurrency } from "../../../helpers";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

export default function MenuItem({ pizza }) {
  const { id, imageUrl, ingredients, name, soldOut, unitPrice } = pizza;
  const dispatch = useDispatch();

  function handleAddCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2 ">
      <img
        className={`w-24 ${soldOut && "grayscale opacity-70"}`}
        src={imageUrl}
        alt=""
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-00 text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="flex justify-between mt-auto items-center text-sm">
          {soldOut ? (
            <p className="font-semibold text-stone-500 uppercase">Sold Out</p>
          ) : (
            <p className="text-stone-700">{formatCurrency(unitPrice)}</p>
          )}
          <Button type="small" onClick={handleAddCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </li>
  );
}
