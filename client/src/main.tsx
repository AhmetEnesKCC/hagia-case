import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./globals.css";
import TrpcProvider from "./components/providers/trpc-provider.tsx";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TrpcProvider>
      <App />
    </TrpcProvider>
  </StrictMode>
);
