export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const TaskReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return [
        {
          id: 1,
          name: 'Get milk',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 2,
          name: 'Clean the car',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ];
    case ADD_TASK:
      return { tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return null;
    case UPDATE_TASK:
      return null;
    default:
      return state;
  }
};
