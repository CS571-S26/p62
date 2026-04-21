import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function FeatureCard({ title, text, to, buttonText }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button as={NavLink} to={to}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;