import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-section bg-light">
      <Container>
        <h1 style = {{ color: 'blue' }}>Made In America Festival Guide</h1>
        <p>
          Plan your day, browse the lineup, and explore Philadelphia's greatest Music Festival!
        </p>
      </Container>
    </div>
  );
}

export default HeroSection;