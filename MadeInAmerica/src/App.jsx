import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import "./App.css";

const scheduleData = [
  {
    id: 1,
    artist: "SZA",
    stage: "Liberty Stage",
    start: "2026-07-18T18:00:00",
    end: "2026-07-18T19:00:00",
  },
  {
    id: 2,
    artist: "Hozier",
    stage: "Riverfront Stage",
    start: "2026-07-18T19:30:00",
    end: "2026-07-18T20:30:00",
  },
  {
    id: 3,
    artist: "The Killers",
    stage: "Main Stage",
    start: "2026-07-18T21:00:00",
    end: "2026-07-18T22:15:00",
  },
];

const locations = [
  { name: "Main Stage", type: "Performance" },
  { name: "Liberty Stage", type: "Performance" },
  { name: "Riverfront Stage", type: "Performance" },
  { name: "Food Vendors", type: "Food" },
  { name: "Bathrooms", type: "Facilities" },
  { name: "First Aid Tent", type: "Emergency" },
];

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <h1>Made In America Planner</h1>
        <p>Plan your day. Discover artists. Build your perfect festival experience.</p>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/lineup">Lineup</NavLink>
          <NavLink to="/schedule">Schedule</NavLink>
          <NavLink to="/map">Map</NavLink>
          <NavLink to="/planner">Planner</NavLink>
          <NavLink to="/tickets">Tickets</NavLink>
        </nav>
      </header>
      <main className="page-content">{children}</main>
    </div>
  );
}

function Home() {
  return (
    <section>
      <h2>Welcome</h2>
      <p>
        This website is to help you make the most of your time at MIA with
        schedules, stage locations, venue essentials, and a custom schedule.
      </p>
      <div className="card-grid">
        <div className="card">
          <h3>Explore the lineup</h3>
          <p>Browse artists and decide who you want to see.</p>
        </div>
        <div className="card">
          <h3>Build your schedule</h3>
          <p>Create a personal itinerary for the performances you want.</p>
        </div>
        <div className="card">
          <h3>Find key locations</h3>
          <p>Locate stages, food, bathrooms, and emergency stations quickly.</p>
        </div>
      </div>
    </section>
  );
}

function Lineup() {
  return (
    <section>
      <h2>Artist Lineup</h2>
      <div className="card-grid">
        {scheduleData.map((show) => (
          <div className="card" key={show.id}>
            <h3>{show.artist}</h3>
            <p><strong>Stage:</strong> {show.stage}</p>
            <p><strong>Starts:</strong> {new Date(show.start).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Schedule({ onAdd }) {
  return (
    <section>
      <h2>Performance Schedule</h2>
      <div className="list">
        {scheduleData.map((show) => (
          <div className="list-item" key={show.id}>
            <div>
              <h3>{show.artist}</h3>
              <p>{show.stage}</p>
              <p>{new Date(show.start).toLocaleString()}</p>
            </div>
            <button onClick={() => onAdd(show)}>Add to Planner</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function MapPage() {
  return (
    <section>
      <h2>Festival Locations</h2>
      <div className="card-grid">
        {locations.map((location) => (
          <div className="card" key={location.name}>
            <h3>{location.name}</h3>
            <p>{location.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tickets() {
  return (
    <section>
      <h2>Tickets</h2>
      <p>Choose the ticket option that works best for your festival experience.</p>
      <div className="card-grid">
        <div className="card">
          <h3>General Admission</h3>
          <p>Access to festival grounds and performances.</p>
        </div>
        <div className="card">
          <h3>VIP</h3>
          <p>Premium viewing areas and upgraded amenities.</p>
        </div>
      </div>
      <a
        className="buy-link"
        href="https://www.ticketmaster.com/"
        target="_blank"
        rel="noreferrer"
      >
        Purchase Tickets
      </a>
    </section>
  );
}

function Planner({ saved, onRemove }) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const nextEvent = useMemo(() => {
    return [...saved]
      .filter((event) => new Date(event.start).getTime() > now)
      .sort((a, b) => new Date(a.start) - new Date(b.start))[0];
  }, [saved, now]);

  const countdown = nextEvent
    ? Math.max(0, new Date(nextEvent.start).getTime() - now)
    : 0;

  const hours = Math.floor(countdown / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return (
    <section>
      <h2>My Planner</h2>
      {nextEvent ? (
        <div className="countdown-box">
          <h3>Next Event</h3>
          <p>{nextEvent.artist} at {nextEvent.stage}</p>
          <p>Starts in {hours}h {minutes}m {seconds}s</p>
        </div>
      ) : (
        <p>No upcoming saved events yet.</p>
      )}

      <div className="list">
        {saved.length === 0 ? (
          <p>You have not added any performances yet.</p>
        ) : (
          [...saved]
            .sort((a, b) => new Date(a.start) - new Date(b.start))
            .map((show) => (
              <div className="list-item" key={show.id}>
                <div>
                  <h3>{show.artist}</h3>
                  <p>{show.stage}</p>
                  <p>{new Date(show.start).toLocaleString()}</p>
                </div>
                <button onClick={() => onRemove(show.id)}>Remove</button>
              </div>
            ))
        )}
      </div>
    </section>
  );
}

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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/schedule" element={<Schedule onAdd={handleAdd} />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/planner" element={<Planner saved={savedShows} onRemove={handleRemove} />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;