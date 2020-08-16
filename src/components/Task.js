import React from 'react';
import { Card } from 'react-bootstrap';

const Task = ({ id, name }) => {
  return (
    <Card key={id} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Task;
