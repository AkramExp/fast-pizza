import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu />, loader: menuLoader },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
