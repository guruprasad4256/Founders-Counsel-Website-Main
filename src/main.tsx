import React from "react";
import { ViteReactSSG } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { appRoutes } from "./App";
import "./styles.css";

// 1. We wrap all your pages inside a "pathless" layout route.
// This injects the HelmetProvider into every page without using invalid SSG properties!
const routes = [
  {
    element: (
      <React.StrictMode>
        <HelmetProvider>
          <Outlet /> {/* Your individual pages from appRoutes will render right here */}
        </HelmetProvider>
      </React.StrictMode>
    ),
    // 2. Pass the array we created in App.tsx as the children
    children: appRoutes,
  },
];

// 3. Now we simply pass the standard routes array. No TypeScript errors!
export const createRoot = ViteReactSSG({ routes });