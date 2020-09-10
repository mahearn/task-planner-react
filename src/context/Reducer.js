const Reducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_TASKS':
      return { tasks };
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return null;
    case 'UPDATE_TASK':
      return null;
    default:
      throw new Error('Action type must be defined');
  }
};

export default Reducer;
