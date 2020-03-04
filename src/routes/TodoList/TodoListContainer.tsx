import React, { useState } from "react";
import TodoListPresenter from "./TodoListPresenter";
import TodoProvider from "./TodoContext";

export default () => {
  const [newTodo, setNewTodo] = useState("");
  const SubmitInput = () => {};
  const changeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const {
      target: { value }
    }: any = e;
    console.log(value);
    setNewTodo(value);
  };

  return (
    <TodoProvider>
      <TodoListPresenter inputChangeFC={changeInput} inputValue={newTodo} />
    </TodoProvider>
  );
};
