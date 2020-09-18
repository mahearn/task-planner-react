import React from 'react';
import { Card } from 'react-bootstrap';

const Task = ({ id, name, description }) => {
  return (
    <Card key={id} style={{ width: '50%' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Task;
