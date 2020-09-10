import React, { useState, useContext } from 'react';
import Task from './Task';
import { TaskProvider } from '../context/TaskProvider';

const Tasks = (props) => {
  const context = useContext(TaskProvider);
  const [state, setState] = useState();

  return (
    <ul>
      {state.tasks.map((task) => (
        <Task key={task.id} name={task.name} />
      ))}
    </ul>
  );
};

export default Tasks;
