import React, { useState } from 'react';

export const GET_TASKLIST = 'GET_TASKLIST';
export const GET_SHOW = 'GET_SHOW';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export default function GlobalState() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const savedCurId = Number(localStorage.getItem('currentId')) || 1;
  const [state, setState] = useState({
    show: false,
    currentId: savedCurId,
    tasks: savedTasks,
  });

  const actions = (action) => {
    const { type, payload } = action;

    switch (type) {
      case GET_SHOW:
        return state;
      case GET_TASKLIST:
        return setState(payload);
      case ADD_TASK:
        localStorage.setItem('currentId', payload.currentId);
        localStorage.setItem('tasks', JSON.stringify(payload.tasks));
        return setState(payload);
      case DELETE_TASK:
        return null;
      case UPDATE_TASK:
        return null;
      case TOGGLE_MODAL:
        return setState(payload);
      default:
        return state;
    }
  };

  return { state, actions };
}
