import { Container } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import ScheduleItem from "../components/ScheduleItem";
import scheduleData from "../data/schedule";

function Schedule({ onAdd, saved }) {
  return (
    <>
      <PageHeader
        title="Festival Schedule"
        subtitle="Browse all performances and add them to your planner."
      />

      <Container className="pb-5">
        {scheduleData.map((item) => {
          const isAdded = saved.some((show) => show.id === item.id);

          return (
            <ScheduleItem
              key={item.id}
              item={item}
              onAdd={onAdd}
              isAdded={isAdded}
            />
          );
        })}
      </Container>
    </>
  );
}

export default Schedule;