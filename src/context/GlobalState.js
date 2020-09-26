import React, { useState } from 'react';

export const SET_TASKLIST = 'SET_TASKLIST';
export const GET_SHOW = 'GET_SHOW';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_CURRENT_INDEX = 'UPDATE_CURRENT_INDEX';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export default function GlobalState() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const savedCurId = Number(localStorage.getItem('currentId')) || 1;
  const [state, setState] = useState({
    isShowModal: false,
    isEdit: false,
    currentIndex: null,
    currentIndexValue: {},
    currentId: savedCurId,
    tasks: savedTasks,
    errorMessages: {
      addBtn:
        'Cannot edit a task from here. Please use the edit icon next to the task you wish to update.',
    },
  });

  const actions = (action) => {
    const { type, payload } = action;

    switch (type) {
      case GET_SHOW:
        return state;
      case SET_TASKLIST:
        return setState(payload);
      case ADD_TASK:
        localStorage.setItem('currentId', payload.currentId);
        localStorage.setItem('tasks', JSON.stringify(payload.tasks));
        return setState(payload);
      case DELETE_TASK:
        return setState(payload);
      case UPDATE_TASK:
        localStorage.setItem('tasks', JSON.stringify(payload.tasks));
        return setState(payload);
      case UPDATE_CURRENT_INDEX:
        return setState(payload);
      case TOGGLE_MODAL:
        return setState(payload);
      default:
        return state;
    }
  };

  return { state, actions };
}
