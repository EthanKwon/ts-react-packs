import React, { createContext, useState, useContext } from "react";
import { ContextProps, TodoProvProps } from "./TodoInterface";

const initialState = {
  toDos: [],
  compoleted: []
};

const TodoContext = createContext({} as ContextProps);

const TodoProvider = ({ children }: TodoProvProps) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <TodoContext.Provider value={{ newTodo, setNewTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

//newTodo를 context의 state로 사용
export const useNewTodo = () => {
  const { newTodo, setNewTodo } = useContext(TodoContext);
  return { newTodo, setNewTodo };
};

export default TodoProvider;
