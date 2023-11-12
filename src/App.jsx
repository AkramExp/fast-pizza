import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
