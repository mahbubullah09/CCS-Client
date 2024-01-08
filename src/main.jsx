import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Alice from "./Alice";
import Boob from "./Boob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Alice />,
    
  },
  {
    path: "bob",
    element: <Boob />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);