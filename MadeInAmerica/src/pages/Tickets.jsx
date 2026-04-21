import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

function TicketAlertForm() {
  const [email, setEmail] = useState("");
  const [ticketType, setTicketType] = useState("General Admission");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up ${email} for ${ticketType} alerts`);
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Body>
        <Card.Title>Sign up for ticket alerts</Card.Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="alertEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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

export default TicketAlertForm;