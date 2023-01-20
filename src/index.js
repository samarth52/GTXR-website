import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ProjectsContributors from "./components/ProjectsContributors";
import Join from "./components/Join/Join";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="projects" element={<ProjectsContributors />} />
      <Route path="join" element={<Join />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (module.hot) {
  module.hot.accept();
}