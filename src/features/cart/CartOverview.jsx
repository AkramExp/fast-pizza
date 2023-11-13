import React from "react";
import { Link } from "react-router-dom";

export default function CartOverview() {
  return (
    <footer className="flex bg-stone-800 text-stone-200 justify-between items-center px-4 py-4 uppercase text-sm">
      <p className="space-x-4 font-semibold">
        <span>1 Pizzas</span>
        <span>12.00</span>
      </p>
      <div>
        <Link>Open Cart &rarr;</Link>
      </div>
    </footer>
  );
}
