import React from 'react';
import { Card } from 'react-bootstrap';

const Task = ({ id, name, description, assignTo, dueDate, status }) => {
  return (
    <Card key={id} style={{ width: '50%' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{assignTo}</Card.Text>
        <Card.Text>{dueDate}</Card.Text>
        <Card.Text>{status}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Task;
