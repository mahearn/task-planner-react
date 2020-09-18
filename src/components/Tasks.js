import React, { useContext, useEffect } from 'react';
import Task from './Task';
import Context from '../context/Context';

function Tasks() {
  const { state, actions } = useContext(Context);

  if (state.tasks.length) {
    return (
      <div className="task-list">
        {state.tasks.map((task) => (
          <Task key={task.id} name={task.name} description={task.description} />
        ))}
      </div>
    );
  } else {
    return <p>No tasks yet. Why don't you add one?</p>;
  }
}

export default Tasks;
