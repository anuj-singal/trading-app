import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

function TokenHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/"); // clean URL after saving token
    }

    // If no token stored → redirect to signup/login page
    if (!localStorage.getItem("token")) {
      window.location.href = "http://localhost:3000";
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenHandler />
    </BrowserRouter>
  </React.StrictMode>
);