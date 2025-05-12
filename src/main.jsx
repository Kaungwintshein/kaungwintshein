import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Detail from "./sections/Detail.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project/:slug" element={<Detail />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
