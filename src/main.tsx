import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./MainPage";
import BrowsePage from "./pages/BrowsePage";
import "./main.css";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route path="browse" element={<BrowsePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
