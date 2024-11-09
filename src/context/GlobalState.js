import React, { createContext, useReducer } from "react";
import {AppReducer} from "./AppReducer";

//initial state
const initialState = {
  tasks: [
    { id: 1, text: "Wash the car", isChecked: false },
    { id: 2, text: "Do the dishes", isChecked: false },
    { id: 3, text: "Walk the dog", isChecked: false },
  ],
};
// create context
export const GlobalContext = createContext(initialState);
//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const checkTask = (id) => {
    dispatch({
      type: "CHECK_TASK",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        deleteTask,
        addTask,
        checkTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
