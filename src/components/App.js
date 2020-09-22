import React, { useEffect, useContext } from 'react';

import Context from '../context/Context';
import NavBar from './NavBar';
import Tasks from './Tasks';
import NewTaskModal from './NewTaskModal';

import '../../scss/main.scss';

function App() {
  const { state, actions } = useContext(Context);

  useEffect(() => {
    // console.log(state.currentId);
    const fetchTasks = () => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const currentId = Number(localStorage.getItem('currentId')) || 1;
      actions({
        type: 'SET_TASKLIST',
        payload: { ...state, tasks, currentId },
      });
    };

    fetchTasks();
  }, [state.currentId]);

  return (
    <>
      <NavBar />
      <Tasks />
      <NewTaskModal />
    </>
  );
}

export default App;
