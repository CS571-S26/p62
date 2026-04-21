import { Card, Button } from "react-bootstrap";

function TicketCard({ title, price, perks }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
        <ul>
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
        <Button>Purchase</Button>
      </Card.Body>
    </Card>
  );
}

export default TicketCard;