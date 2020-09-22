import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';

import Context from '../context/Context';

const Task = ({ id, name, description, assignTo, dueDate, status }) => {
  const { state, actions } = useContext(Context);

  const handleEditClick = (e) => {
    const id = e.target.getAttribute('data-editid');
  };

  const handleDeleteClick = (e) => {
    const id = e.target.getAttribute('data-deleteid');
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let newTasks = tasks.filter((task) => task.id !== id);

    localStorage.setItem('tasks', JSON.stringify(newTasks));

    actions({
      type: 'DELETE_TASK',
      payload: { ...state, tasks: newTasks },
    });
  };

  return (
    <Card key={id} style={{ width: '100%' }}>
      <Card.Body>
        <div className="fa-pull-right">
          <i
            className="fa fa-edit"
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
        <Card.Text>Id: {id}</Card.Text>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{assignTo}</Card.Text>
        <Card.Text>{dueDate}</Card.Text>
        <Card.Text>{status}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Task;
