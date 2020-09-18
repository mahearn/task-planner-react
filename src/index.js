import React from 'react';
import ReactDOM from 'react-dom';

import Context from './context/Context';
import GlobalState from './context/GlobalState';
import App from './components/App';

const Index = () => {
  const store = GlobalState();
  return (
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
