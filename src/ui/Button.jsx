import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, type, to }) {
  const base = "";

  const styles = {
    primary: base + " px-4 py-3 ",
  };
  return (
    <Link
      to={to}
      className="inline-block rounded-full uppercase font-semibold text-sm bg-yellow-400 px-4 py-3 sm:px-6 sm:py-4"
    >
      {children}
    </Link>
  );
}
