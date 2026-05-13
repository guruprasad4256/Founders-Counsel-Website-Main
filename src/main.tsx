import { StrictMode } from "react";
import { ViteReactSSG } from "vite-react-ssg";
import App from "./App";
import "./styles.css";

const routes = [
  {
    path: "*",
    element: (
      <StrictMode>
        <App />
      </StrictMode>
    ),
  },
];

export const createRoot = ViteReactSSG({ routes });