import { Container } from "react-bootstrap";

function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-light border-bottom mb-4">
      <Container className="py-4">
        <h1 className="fw-bold text-primary">{title}</h1>
        {subtitle && <p className="text-primary mb-0">{subtitle}</p>}
      </Container>
    </div>
  );
}

export default PageHeader;