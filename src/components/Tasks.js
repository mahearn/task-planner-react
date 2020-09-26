import React, { useContext } from 'react';
import Task from './Task';
import Context from '../context/Context';

function Tasks() {
  const { state, actions } = useContext(Context);

  if (state.tasks.length) {
    return (
      <div className="task-list">
        {state.tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            assignTo={task.assignTo}
            dueDate={task.dueDate}
            status={task.status}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="text-center">
        No tasks yet. Click the plus button to add one.
      </div>
    );
  }
}

export default Tasks;
