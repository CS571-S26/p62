import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import mapImg from "../assets/map.jpg";



function MapPage() {
  return (
    <>
      <PageHeader
        title="Festival Map"
        subtitle="Find stages, food, bathrooms, and emergency stations."
      />

      <Container className="pb-5">
                <img
           src={mapImg}
           alt="Made In America festival map"
           className="img-fluid my-4"
         />
      </Container>
    </>
  );
}

export default MapPage;