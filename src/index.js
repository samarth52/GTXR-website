import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Title from "./components/Title/Title";
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
        <Route index element={<Title title="GTXR | Georgia Tech's Portal to Extended Reality"><Home /></Title>} />
        <Route path="*" element={<Title title="GTXR | Not Found"><NotFound /></Title>} />
        <Route path="projects" element={<Title title="GTXR | Projects"><ProjectsContributors /></Title>} />
        <Route path="join" element={<Title title="GTXR | Join Us"><Join /></Title>} />
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
