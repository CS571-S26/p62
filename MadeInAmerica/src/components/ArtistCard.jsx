import { Card, Button } from "react-bootstrap";

function ArtistCard({ artist, stage, time, wikiUrl }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{artist}</Card.Title>
        <Card.Text>Stage: {stage}</Card.Text>
        <Card.Text>Time: {time}</Card.Text>
        <Button
          variant="outline-dark"
          href={wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ArtistCard;