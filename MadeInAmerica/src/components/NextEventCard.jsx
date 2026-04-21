import { Card } from "react-bootstrap";

function NextEventCard({ nextEvent, countdown }) {
  if (!nextEvent) return null;

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>Next Event</Card.Title>
        <Card.Text>{nextEvent.artist}</Card.Text>
        <Card.Text>{nextEvent.stage}</Card.Text>
        <Card.Text>{countdown}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NextEventCard;