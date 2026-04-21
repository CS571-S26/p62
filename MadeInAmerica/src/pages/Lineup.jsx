import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import ArtistCard from "../components/ArtistCard";
import uniqueArtists from "../data/artists";

function Lineup() {
  return (
    <>
      <PageHeader
        title="Festival Lineup"
        subtitle="Browse the artists performing at Made In America."
      />

      <Container className="pb-5">
        <Row className="g-4">
          {uniqueArtists.map((artist) => (
            <Col key={artist.id} sm={12} md={6} lg={4}>
              <ArtistCard
                artist={artist.artist}
                stage={artist.stage}
                time={new Date(artist.start).toLocaleString()}
                wikiUrl={artist.wikiUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Lineup;