import React, { createContext } from 'react';

export const TaskProvider = createContext({
  tasks: [
    { id: 1, name: 'Get milk' },
    { id: 2, name: 'Clean the car' },
  ],
  addTask: (task) => {},
  removeTask: (id) => {},
  updateTask: (id) => {},
  isModalShow: false,
});
