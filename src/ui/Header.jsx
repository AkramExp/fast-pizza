import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-5 py-3 bg-yellow-500">
      <h1 className="tracking-widest uppercase">Fast Pizza</h1>
      <input
        className="input bg-yellow-100 w-[8.5rem] sm:w-72 placeholder:text-stone-700 focus:sm:w-80 transition-all duration-300"
        placeholder="Search Order"
      />
    </nav>
  );
}
