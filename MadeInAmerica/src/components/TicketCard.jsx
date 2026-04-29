import { Card, Button } from "react-bootstrap";

function TicketCard({ title, price, perks, onSelect }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h2">{title}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{price}</Card.Subtitle>

        <ul>
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>

        <Button
          className="mt-auto"
          aria-label={`Select ${title} ticket option`}
          onClick={() => onSelect(title)}
        >
          Select ticket
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TicketCard;