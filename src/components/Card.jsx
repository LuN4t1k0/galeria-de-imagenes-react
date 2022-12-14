import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const GaleryCard = ({ url, title, description ,btnLink}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary"><a href={btnLink}>Ver Pelicula</a> </Button>
      </Card.Body>
    </Card>
  );
};

export default GaleryCard;
