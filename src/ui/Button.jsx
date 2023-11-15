import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, type, to, disabled, onClick }) {
  const base =
    "inline-block rounded-full uppercase font-semibold text-sm bg-yellow-400 tracking-wide hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs ",
    round: base + " text-sm px-2.5 py-1 md:px-3.5 md:py-2 ",
    secondary:
      "inline-block rounded-full uppercase font-semibold  border-2text-stone-400 border-stone-200 tracking-wide hover:bg-stone-300   focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 transition-all duration-300 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
