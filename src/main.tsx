import React from "react";
import { ViteReactSSG } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles.css"; // or "./index.css" depending on your setup

// Change "*" to "/" so the builder knows to generate an index.html for the home page
const routes = [
  {
    path: "/",
    element: (
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    ),
  },
];

export const createRoot = ViteReactSSG({ routes });