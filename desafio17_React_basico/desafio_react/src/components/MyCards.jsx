import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tarjeta = ({ urlImagen, nombre, descripcion, llevame }) => {
  return (
    <Container className="card1">
      <Row>
        <Col>
          <Card border="dark" bg="info" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={urlImagen} />
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
              <Button variant="primary">{llevame}</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Tarjeta;
