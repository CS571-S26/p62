import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup
} from "react-bootstrap";
import "./App.css";

const scheduleData = [
  {
    id: 1,
    artist: "Larry June",
    stage: "Rocky Stage",
    start: "2026-09-05T15:15:00",
    end: "2026-09-05T16:15:00",
  },
  {
    id: 2,
    artist: "Key Glock",
    stage: "Rocky Stage",
    start: "2026-09-05T16:30:00",
    end: "2026-09-05T17:45:00",
  },
  {
    id: 3,
    artist: "Pusha T",
    stage: "Rocky Stage",
    start: "2026-09-05T18:00:00",
    end: "2026-09-05T19:30:00",
  },
  {
  id: 4,
    artist: "Jazmine Sullivan",
    stage: "Rocky Stage",
    start: "2026-09-05T19:45:00",
    end: "2026-09-05T21:15:00",
  },
  {
    id: 5,
    artist: "Tyler, The Creator",
    stage: "Rocky Stage",
    start: "2026-09-05T21:30:00",
    end: "2026-09-05T23:00:00",
  },
  {
    id: 6,
    artist: "Babyface Ray",
    stage: "Liberty Stage",
    start: "2026-09-05T14:45:00",
    end: "2026-09-05T15:30:00",
  },
  {
    id: 7,
    artist: "Toro Y Moi",
    stage: "Liberty Stage",
    start: "2026-09-05T15:45:00",
    end: "2026-09-05T17:00:00",
  },
  {
    id: 8,
    artist: "J.I.D.",
    stage: "Liberty Stage",
    start: "2026-09-05T17:15:00",
    end: "2026-09-05T18:00:00",
  },
  {
    id: 9,
    artist: "Kodak Black",
    stage: "Liberty Stage",
    start: "2026-09-05T18:15:00",
    end: "2026-09-05T19:15:00",
  },
  {
    id: 10,
    artist: "Lil Uzi Vert",
    stage: "Liberty Stage",
    start: "2026-09-05T20:45:00",
    end: "2026-09-05T21:45:00",
  },  
  { 
    id: 11,
    artist: "Dixson",
    stage: "Freedom Stage",
    start: "2026-09-05T14:00:00",
    end: "2026-09-05T14:30:00",
    }, 
  {
    id: 12,
    artist: "Zah Sosaa",
    stage: "Freedom Stage",
    start: "2026-09-05T14:45:00",
    end: "2026-09-05T15:15:00", 
    },
  {
    id: 13,
    artist: "Jeleel!",
    stage: "Freedom Stage",
    start: "2026-09-05T15:30:00",
    end: "2026-09-05T16:00:00",
  },
  {
    id: 14,
    artist: "GloRilla",
    stage: "Freedom Stage",
    start: "2026-09-05T16:15:00",
    end: "2026-09-05T16:45:00",
  },
  {
    id: 15,
    artist: "B-Lovee",
    stage: "Freedom Stage",
    start: "2026-09-05T17:00:00",
    end: "2026-09-05T17:30:00",
  },
  {
    id: 16,
    artist: "Jenevieve",
    stage: "Freedom Stage",
    start: "2026-09-05T17:45:00",
    end: "2026-09-05T18:15:00",
  },
  {
    id: 17,
    artist: "Icewear Vezzo",
    stage: "Freedom Stage",
    start: "2026-09-05T18:30:00",
    end: "2026-09-05T19:00:00",
  },
  {
    id: 18,
    artist: "Flo Milli",
    stage: "Freedom Stage",
    start: "2026-09-05T19:15:00",
    end: "2026-09-05T20:00:00",
  },
  {
    id: 19,
    artist: "Victoria Monet",
    stage: "Rocky Stage",
    start: "2026-09-06T15:00:00",
    end: "2026-09-06T16:00:00",
    },
  {
    id: 20,
    artist: "Tate McCrae",
    stage: "Rocky Stage",
    start: "2026-09-06T16:15:00",
    end: "2026-09-06T17:30:00",
    },
  {
    id: 21,
    artist: "Ryan Castro",
    stage: "Rocky Stage",
    start: "2026-09-06T17:45:00",
    end: "2026-09-06T19:15:00",
    },
  {
    id: 22,
    artist: "Don Tolliver",
    stage: "Rocky Stage",
    start: "2026-09-06T19:30:00",
    end: "2026-09-06T21:15:00",
    },  
  {
    id: 23,
    artist: "Bad Bunny",
    stage: "Rocky Stage",
    start: "2026-09-06T21:30:00",
    end: "2026-09-06T23:00:00",
  },
  {
    id: 24,
    artist: "Chimbala",
    stage: "Liberty Stage",
    start: "2026-09-06T14:30:00",
    end: "2026-09-06T15:15:00",
  },
  {
    id: 25,
    artist: "Fuerza Regida",
    stage: "Liberty Stage",
    start: "2026-09-06T15:30:00",
    end: "2026-09-06T16:45:00",
  },
  {
    id: 26,
    artist: "Rels B",
    stage: "Liberty Stage",
    start: "2026-09-06T17:00:00",
    end: "2026-09-06T18:15:00",
  },
  {
    id: 27,
    artist: "Snoh Aalegra",
    stage: "Liberty Stage",
    start: "2026-09-06T18:30:00",
    end: "2026-09-06T19:15:00",
  },
  {
    id: 28,
    artist: "Burna Boy",
    stage: "Liberty Stage",
    start: "2026-09-06T20:30:00",
    end: "2026-09-06T21:30:00",
  },
  {
    id: 29,
    artist: "5'2",
    stage: "Freedom Stage",
    start: "2026-09-06T13:30:00",
    end: "2026-09-06T14:00:00",
  },
  {
    id: 30,
    artist: "Becca Hannah",
    stage: "Freedom Stage",
    start: "2026-09-06T14:15:00",
    end: "2026-09-06T14:45:00",
    },
  {
    id: 31,
    artist: "Kur",  
    stage: "Freedom Stage",
    start: "2026-09-06T15:00:00",
    end: "2026-09-06T15:30:00",
  },
  {
    id: 32,
    artist: "Armani White",
    stage: "Freedom Stage",
    start: "2026-09-06T15:45:00",
    end: "2026-09-06T16:15:00", 
  },
  {
    id: 33,
      artist: "Ambre", 
    stage: "Freedom Stage",
    start: "2026-09-06T16:30:00",
    end: "2026-09-06T17:00:00",
  },
  {
    id: 34,
    artist: "Kalan.FrfromDetroit  ",
    stage: "Freedom Stage",
    start: "2026-09-06T17:15:00",
    end: "2026-09-06T17:45:00",
  },
  {
    id: 35,
    artist: "Coast Contra",
    stage: "Freedom Stage",
    start: "2026-09-06T18:00:00",
    end: "2026-09-06T18:30:00",
    },
  {
    id: 36,
    artist: "Kenny Mason",
    stage: "Freedom Stage",
    start: "2026-09-06T18:45:00",
    end: "2026-09-06T19:15:00",
  },
  {
    id: 37,
    artist: "Young Nudy",
    stage: "Freedom Stage",
    start: "2026-09-06T19:30:00",
    end: "2026-09-06T20:15:00",
  }


];

const locations = [
  { id: 1, name: "Rocky Stage", type: "Performance" },
  { id: 2, name: "Liberty Stage", type: "Performance" },
  { id: 3, name: "Freedom Stage", type: "Performance" },
  { id: 4, name: "Food Vendors", type: "Food" },
  { id: 5, name: "Bathrooms", type: "Facilities" },
  { id: 6, name: "First Aid Tent", type: "Emergency" },
];

function SiteNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Made In America Planner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="festival-nav" />
        <Navbar.Collapse id="festival-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/lineup">Lineup</Nav.Link>
            <Nav.Link as={NavLink} to="/schedule">Schedule</Nav.Link>
            <Nav.Link as={NavLink} to="/map">Map</Nav.Link>
            <Nav.Link as={NavLink} to="/planner">Planner</Nav.Link>
            <Nav.Link as={NavLink} to="/tickets">Tickets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Home() {
  return (
    <Container>
      <div className="hero-section text-center">
        <h1>Plan Your Perfect Festival Day</h1>
        <p className="lead">
          Explore the lineup, check stage locations, find important venue info,
          and build a personalized schedule with countdown alerts.
        </p>
      </div>

      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Explore the Lineup</Card.Title>
              <Card.Text>
                Browse artists and find performances you do not want to miss.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Build Your Schedule</Card.Title>
              <Card.Text>
                Add performances to your planner and create your own itinerary.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Navigate the Venue</Card.Title>
              <Card.Text>
                Find stages, food vendors, bathrooms, and emergency stations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function Lineup() {
  return (
    <Container>
      <h2 className="mb-4">Artist Lineup</h2>
      <Row className="g-4">
        {scheduleData.map((show) => (
          <Col md={4} key={show.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{show.artist}</Card.Title>
                <Card.Text><strong>Stage:</strong> {show.stage}</Card.Text>
                <Card.Text>
                  <strong>Starts:</strong> {new Date(show.start).toLocaleString()}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function Schedule({ onAdd }) {
  return (
    <Container>
      <h2 className="mb-4">Performance Schedule</h2>
      <Row className="g-3">
        {scheduleData.map((show) => (
          <Col xs={12} key={show.id}>
            <Card className="shadow-sm">
              <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                <div>
                  <Card.Title>{show.artist}</Card.Title>
                  <Card.Text className="mb-1">{show.stage}</Card.Text>
                  <Card.Text className="mb-0">
                    {new Date(show.start).toLocaleString()}
                  </Card.Text>
                </div>
                <Button onClick={() => onAdd(show)}>Add to Planner</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function MapPage() {
  return (
    <Container>
      <h2 className="mb-4">Festival Locations</h2>
      <Row className="g-4">
        {locations.map((location) => (
          <Col md={4} key={location.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                <Card.Text>{location.type}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function Tickets() {
  return (
    <Container>
      <h2 className="mb-4">Tickets</h2>
      <Row className="g-4 mb-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>General Admission</Card.Title>
              <Card.Text>
                Access to festival grounds and all general performances.
              </Card.Text>
              <Card.Text><strong>Price:</strong> $149</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>VIP</Card.Title>
              <Card.Text>
                Premium viewing areas, faster entry, and upgraded amenities.
              </Card.Text>
              <Card.Text><strong>Price:</strong> $299</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Button
        as="a"
        href="https://www.ticketmaster.com/"
        target="_blank"
        rel="noreferrer"
      >
        Purchase Tickets
      </Button>
    </Container>
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
    <Container>
      <h2 className="mb-4">My Planner</h2>

      {nextEvent ? (
        <Card className="mb-4 shadow-sm border-primary">
          <Card.Body>
            <Card.Title>Next Event</Card.Title>
            <Card.Text>
              {nextEvent.artist} at {nextEvent.stage}
            </Card.Text>
            <Card.Text>
              Starts in {hours}h {minutes}m {seconds}s
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>No upcoming saved events yet.</p>
      )}

      {saved.length === 0 ? (
        <p>You have not added any performances yet.</p>
      ) : (
        <ListGroup>
          {[...saved]
            .sort((a, b) => new Date(a.start) - new Date(b.start))
            .map((show) => (
              <ListGroup.Item
                key={show.id}
                className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"
              >
                <div>
                  <div className="fw-bold">{show.artist}</div>
                  <div>{show.stage}</div>
                  <div>{new Date(show.start).toLocaleString()}</div>
                </div>
                <Button variant="outline-danger" onClick={() => onRemove(show.id)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
    </Container>
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
      <SiteNavbar />
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
    </HashRouter>
  );
}

export default App;