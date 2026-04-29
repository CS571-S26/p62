import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import TicketCard from "../components/TicketCard";

const ticketOptions = [
  {
    title: "General Admission",
    price: "$149",
    perks: ["Full weekend access", "Access to all stages", "Food and merch vendors"],
  },
  {
    title: "VIP",
    price: "$299",
    perks: ["VIP viewing areas", "Dedicated entry lane", "Premium lounge access"],
  },
  {
    title: "Weekend Pass",
    price: "$199",
    perks: ["Two-day festival access", "Re-entry allowed", "Mobile ticket delivery"],
  },
];

function TicketAlertForm({ ticketType, setTicketType }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up ${email} for ${ticketType} alerts`);
    setEmail("");
    setTicketType("General Admission");

  };

  return (
    <Card id="ticket-alerts" className="mt-4 shadow-sm">
      <Card.Body>
        <Card.Title as="h2">Sign up for ticket alerts</Card.Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="alertEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="name@example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ticketType">
            <Form.Label>Ticket type</Form.Label>
            <Form.Select
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
            >
              <option>General Admission</option>
              <option>VIP</option>
              <option>Weekend Pass</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

function Tickets() {
  const [ticketType, setTicketType] = useState("General Admission");

  function handleSelect(type) {
    setTicketType(type);
    document.getElementById("ticket-alerts")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <PageHeader
        title="Tickets"
        subtitle="Choose a pass and sign up for ticket availability alerts."
      />

      <Container className="mb-5">
        <Row className="g-4">
          {ticketOptions.map((ticket) => (
            <Col md={4} key={ticket.title}>
              <TicketCard {...ticket} onSelect={handleSelect} />
            </Col>
          ))}
        </Row>

        <TicketAlertForm ticketType={ticketType} setTicketType={setTicketType} />
      </Container>
    </>
  );
}

export default Tickets;