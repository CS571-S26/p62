import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import SiteNavbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Lineup from "./pages/Lineup";
import Schedule from "./pages/Schedule";
import MapPage from "./pages/MapPage";
import Planner from "./pages/Planner";
import Tickets from "./pages/Tickets";

function App() {
  const [savedShows, setSavedShows] = useState(() => {
    const stored = localStorage.getItem("planner");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("planner", JSON.stringify(savedShows));
  }, [savedShows]);

  function handleAdd(show) {
    setSavedShows((current) => {
      if (current.some((item) => item.id === show.id)) return current;
      return [...current, show];
    });
  }

  function handleRemove(id) {
    setSavedShows((current) => current.filter((item) => item.id !== id));
  }

  return (
    <HashRouter>
      <SiteNavbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/schedule" element={<Schedule onAdd={handleAdd} />} />
          <Route path="/map" element={<MapPage />} />
          <Route
            path="/planner"
            element={<Planner saved={savedShows} onRemove={handleRemove} />}
          />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;