import React from "react";
import { ViteReactSSG } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles.css";

// 1. We wrap your App with StrictMode and HelmetProvider right here in the route definition.
const routes = [
  {
    path: "*",
    element: (
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    ),
  },
];

// 2. Now we simply pass the routes array. No invalid properties!
export const createRoot = ViteReactSSG({ routes });