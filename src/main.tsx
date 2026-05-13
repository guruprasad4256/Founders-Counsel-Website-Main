import React from "react";
import { ViteReactSSG } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { appRoutes } from "./App";
import "./styles.css";

const routes = [
  {
    element: (
      <React.StrictMode>
        <HelmetProvider>
          <Outlet />
        </HelmetProvider>
      </React.StrictMode>
    ),
    children: appRoutes,
  },
];

export const createRoot = ViteReactSSG({ routes });