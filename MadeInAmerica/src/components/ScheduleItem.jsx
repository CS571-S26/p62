import { Card, Button, Badge } from "react-bootstrap";

function ScheduleItem({ item, onAdd, isAdded }) {
  const startDate = new Date(item.start);
  const endDate = new Date(item.end);

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{item.artist}</Card.Title>
        <Card.Text>{item.stage}</Card.Text>
        <Card.Text>
          {startDate.toLocaleDateString()}{" "}
          {startDate.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })}{" "}
          -{" "}
          {endDate.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })}
        </Card.Text>

        {!isAdded ? (
          <Button onClick={() => onAdd(item)}>Add to Planner</Button>
        ) : (
          <Badge bg="success">Added</Badge>
        )}
      </Card.Body>
    </Card>
  );
}

export default ScheduleItem;