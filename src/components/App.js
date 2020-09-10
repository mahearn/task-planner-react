import React, { Children } from 'react';

import { TaskProvider } from '../context/TaskProvider';
import NavBar from './NavBar';
import Tasks from './Tasks';
import NewTaskModal from './NewTaskModal';

function App(props) {
  return (
    <TaskProvider.Consumer>
      <NavBar />
      <Tasks />
      <NewTaskModal />
    </TaskProvider.Consumer>
  );
}

export default App;
