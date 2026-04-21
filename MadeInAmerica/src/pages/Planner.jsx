import { Container, ListGroup } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import PlannerItem from "../components/PlannerItem";

function Planner({ saved, onRemove }) {
  return (
    <>
      <PageHeader
        title="My Planner"
        subtitle="Your saved performances with live countdowns."
      />

      <Container className="pb-5">
        {saved.length === 0 ? (
          <p>You have not added any performances yet.</p>
        ) : (
          <ListGroup>
            {saved.map((item) => (
              <PlannerItem
                key={item.id}
                item={item}
                onRemove={onRemove}
              />
            ))}
          </ListGroup>
        )}
      </Container>
    </>
  );
}

export default Planner;