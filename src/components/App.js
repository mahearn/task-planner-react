import React, { Children } from 'react';

import { TaskProvider } from '../context/TaskContext';
import NavBar from './NavBar';
import Tasks from './Tasks';
import NewTaskModal from './NewTaskModal';

function App(props) {
  return (
    <TaskProvider>
      <NavBar />
      <Tasks />
      <NewTaskModal />
    </TaskProvider>
  );
}

export default App;
