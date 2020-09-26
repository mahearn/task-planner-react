import React, { useContext, useRef } from 'react';
import { Card } from 'react-bootstrap';
import useConfirm from '@hookeasy/use-confirm';

import Context from '../context/Context';

const Task = ({ id, name, description, assignTo, dueDate, status }) => {
  const { state, actions } = useContext(Context);

  const handleEditClick = (e) => {
    const id = e.target.getAttribute('data-editid');
    const ls = state.tasks;
    const taskIndex = ls.findIndex((x) => x.id === id);

    actions({
      type: 'TOGGLE_MODAL',
      payload: {
        ...state,
        currentIndex: taskIndex,
        currentIndexValue: ls[taskIndex],
        isShowModal: true,
        isEdit: true,
      },
    });
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
      <Card.Body className="inner-border">
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
        <Card.Text>
          <span className="small-text">Id: {id}</span>
        </Card.Text>
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
