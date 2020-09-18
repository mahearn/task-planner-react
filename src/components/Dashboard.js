import React from 'react';

import Tasks from './Tasks';

function Dashboard() {
  return (
    <div className="task-column">
      <div className="col">
        <Tasks />
      </div>
      <div className="col"></div>
    </div>
  );
}

export default Dashboard;
