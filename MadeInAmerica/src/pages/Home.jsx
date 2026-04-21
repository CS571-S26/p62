import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import lineupImg from "../assets/lineup.png";

function Home() {
  return (
    <>
      <HeroSection />

      <Container>


        <Row className="g-4">
          <Col md={4}>
            <FeatureCard
              title="Explore the Lineup"
              text="Browse artists and find performances you don't want to miss."
              to="/lineup"
              buttonText="View Lineup"
            />
          </Col>
          <Col md={4}>
            <FeatureCard
              title="Build Your Schedule"
              text="Add performances to your planner so you never miss your favorite artist."
              to="/schedule"
              buttonText="View Schedule"
            />
          </Col>
          <Col md={4}>
            <FeatureCard
              title="Navigate the Venue"
              text="Find stages, food vendors, bathrooms, and emergency stations."
              to="/map"
              buttonText="View Map"
            />
          </Col>
        </Row>
                <img
          src={lineupImg}
          alt="Made In America festival flyer"
          className="img-fluid my-4"
        />
      </Container>
    </>
  );
}

export default Home;