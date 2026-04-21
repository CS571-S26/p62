import { ListGroup, Button, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";

function getCountdown(startTime) {
  const now = new Date();
  const eventTime = new Date(startTime);
  const diff = eventTime - now;

  if (diff <= 0) {
    return "Started or finished";
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return `${hours}h ${minutes}m ${seconds}s`;
}

function PlannerItem({ item, onRemove }) {
  const [countdown, setCountdown] = useState(getCountdown(item.start));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(item.start));
    }, 1000);

    return () => clearInterval(interval);
  }, [item.start]);

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{item.artist}</strong>
        <div>{item.stage}</div>
        <div>
          {new Date(item.start).toLocaleString()} -{" "}
          {new Date(item.end).toLocaleTimeString()}
        </div>
        <Badge bg="dark" className="mt-2">
          Countdown: {countdown}
        </Badge>
      </div>

      <Button variant="danger" size="sm" onClick={() => onRemove(item.id)}>
        Remove
      </Button>
    </ListGroup.Item>
  );
}

export default PlannerItem;