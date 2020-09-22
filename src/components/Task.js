import React from 'react';
import { Card } from 'react-bootstrap';

const Task = ({ id, name, description, assignTo, dueDate, status }) => {
  const handleEditClick = (e) => {
    // const editId = e.target.classList('id');
    // console.log(editId);
  };

  const handleDeleteClick = (e) => {
    // const deleteId = e.target.dataset.deleteid;
    // console.log(deleteId);
  };

  return (
    <Card key={id} style={{ width: '100%' }}>
      <Card.Body>
        <div className="fa-pull-right">
          <i
            className={`fa fa-edit ${id}`}
            aria-hidden="true"
            data-editid={id}
            onClick={handleEditClick}
          ></i>
          <i
            className="fa fa-trash"
            aria-hidden="true"
            data-deleteid={id}
            onClick={handleDeleteClick}
          ></i>
        </div>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{id}</Card.Text>
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
