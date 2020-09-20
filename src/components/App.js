import React, { useEffect, useContext } from 'react';

import Context from '../context/Context';
import NavBar from './NavBar';
import Tasks from './Tasks';
import NewTaskModal from './NewTaskModal';

import '../../scss/main.scss';

function App() {
  const { state, actions } = useContext(Context);
  let taskList;

  useEffect(() => {
    const fetchTasks = () => {
      taskList = JSON.parse(localStorage.getItem('tasks')) || [];
      actions({
        type: 'SET_ALL_TASKS',
        payload: { ...state, tasks: taskList },
      });
    };

    fetchTasks();
  }, []);

  return (
    <>
      <NavBar />
      <Tasks />
      <NewTaskModal />
    </>
  );
}

export default App;
