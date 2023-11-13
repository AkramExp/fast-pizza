import React from "react";

export default function SearchOrder() {
  return (
    <form>
      <input
        className="input bg-yellow-100 w-[8.5rem] sm:w-64 placeholder:text-stone-700 focus:sm:w-80 transition-all duration-300"
        placeholder="Search Order"
      />
    </form>
  );
}
