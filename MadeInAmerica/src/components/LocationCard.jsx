import { Card } from "react-bootstrap";

function LocationCard({ name, description }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;