import React, { useState, useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../context/TaskContext';

const Tasks = () => {
  const { task } = useContext(TaskContext);
  const [tasks, setTasks] = task;

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} name={task.name} />
      ))}
    </ul>
  );
};

export default Tasks;
