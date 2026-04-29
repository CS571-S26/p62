import { Badge } from "react-bootstrap";

function CountdownBadge({ countdown }) {
  return (
    <Badge bg="secondary" aria-label={`Countdown: ${countdown}`}>
      Countdown: {countdown}
    </Badge>
  );
}

export default CountdownBadge;
