import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { HeroUIProvider } from "@heroui/react";

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </React.StrictMode>,
);
