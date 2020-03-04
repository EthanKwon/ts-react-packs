import React, { createContext, useReducer, useState } from "react";
import reducer from "./TodoReducer";
import { ContextProps, TodoProvProps } from "./TodoInterface";

const initialState = {
  toDos: [],
  compoleted: []
};

const TodoContext = createContext({} as ContextProps);

const TodoProvider = ({ children }: TodoProvProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const { Consumer: TodoConsumer } = TodoContext;

export default TodoProvider;
