import React from "react";
import Button from "../../ui/Button";

export default function MenuItem({ pizza }) {
  const { id, imageUrl, ingredients, name, soldOut, unitPrice } = pizza;

  return (
    <li className="flex gap-4 py-2 ">
      <img
        className="w-24
      "
        src={imageUrl}
        alt=""
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm">{ingredients}</p>
        <div className="flex justify-between mt-auto items-center text-sm">
          <p>{unitPrice}</p>
          <Button type="small">Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}
