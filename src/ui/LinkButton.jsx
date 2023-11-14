import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-blue-600 hover:text-blue-700 text-sm";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return <Link className={className}>{children}</Link>;
}
