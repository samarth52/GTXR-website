import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ProjectsContributors from "./components/ProjectsContributors";
import Join from "./components/Join/Join";
import WindowSizeContext from "./contexts/WindowSizeContext";
import "./index.css";

function App() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 455);

    handleResize();
    window.addEventListener("resize", handleResize, false);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={{ mobile }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="projects" element={<ProjectsContributors />} />
        <Route path="join" element={<Join />} />
      </Routes>
    </WindowSizeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

if (module.hot) {
  module.hot.accept();
}
