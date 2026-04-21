import { Card, Button } from "react-bootstrap";

function ScheduleItem({ item, onAdd }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{item.artist}</Card.Title>
        <Card.Text>{item.stage}</Card.Text>
        <Card.Text>
          {item.start} - {item.end}
        </Card.Text>
        <Button onClick={() => onAdd(item)}>Add to Planner</Button>
      </Card.Body>
    </Card>
  );
}

export default ScheduleItem;