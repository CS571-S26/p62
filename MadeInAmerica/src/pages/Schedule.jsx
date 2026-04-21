import { Container } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import ScheduleItem from "../components/ScheduleItem";
import scheduleData from "../data/schedule";

function Schedule({ onAdd }) {
  return (
    <>
      <PageHeader
        title="Festival Schedule"
        subtitle="Browse all performances and add them to your planner."
      />

      <Container className="pb-5">
        {scheduleData.map((item) => (
          <ScheduleItem
            key={item.id}
            item={item}
            onAdd={onAdd}
          />
        ))}
      </Container>
    </>
  );
}

export default Schedule;