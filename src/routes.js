import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Repositories from "./pages/Repositories";
import HomeApp from "./pages/Home";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeApp />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}
