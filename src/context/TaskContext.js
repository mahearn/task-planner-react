import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [show, setShow] = useState(false); //controls state of 'New task' modal
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Get milk',
    },
    {
      id: 2,
      name: 'Clean the car',
    },
  ]);

  return (
    <TaskContext.Provider
      value={{ task: [tasks, setTasks], modal: [show, setShow] }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'GET_ALL_TASKS':
//       return { tasks };
//     case 'ADD_TASK':
//       return { tasks: [...state.tasks, action.payload] };
//     case 'DELETE_TASK':
//       return null;
//     case 'UPDATE_TASK':
//       return null;
//     default:
//       throw new Error('Action type must be defined');
//   }
// }
