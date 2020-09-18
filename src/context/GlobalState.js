import React, { useState, useEffect } from 'react';

export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const SET_ALL_TASKS = 'SET_ALL_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export default function GlobalState() {
  const [state, setState] = useState({
    show: false,
    tasks: [],
  });

  const actions = (action) => {
    const { type, payload } = action;

    switch (type) {
      case GET_ALL_TASKS:
        return state;
      case SET_ALL_TASKS:
        return setState(payload);
      case ADD_TASK:
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
