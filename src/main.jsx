import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import InformationContextProvider from "./InformationContext.jsx";
import Doors from "./routes/Doors.jsx";
import Interior from "./routes/Interior.jsx";
import Index from "./routes/Index.jsx";
import { Fade } from "react-awesome-reveal";
createRoot(document.getElementById("root")).render(
  <InformationContextProvider>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/drzwi" element={<Doors />} />
        <Route path="/wnetrze/:name" element={<Interior />} />
      </Routes>
    </BrowserRouter>
  </InformationContextProvider>
);
