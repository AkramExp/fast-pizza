import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input bg-yellow-100 w-[8.5rem] sm:w-64 text-sm placeholder:text-stone-700 focus:sm:w-80 transition-all duration-300"
        placeholder="Search Order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
