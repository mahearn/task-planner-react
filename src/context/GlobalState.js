import { useState } from 'react';
import Reducer from './Reducer';

const action = Reducer;

const GlobalState = () => {
  const [state, setState] = useState({
    tasks: [],
    statusColumn: [],
  });

  return { state, action };
};

export default GlobalState;
