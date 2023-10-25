import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Boton =  ({boton}) => {
  return (
    <Button variant="primary">
      {boton} <Badge bg="secondary"></Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default Boton;