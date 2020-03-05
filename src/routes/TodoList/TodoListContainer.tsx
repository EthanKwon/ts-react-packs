import React, { useState } from "react";
import TodoListPresenter from "./TodoListPresenter";
import TodoProvider, { useNewTodo } from "./TodoContext";

export default () => {
  const { newTodo, setNewTodo } = useNewTodo();
  const submitInput = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setNewTodo("");
  };
  const changeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const {
      target: { value }
    }: any = e;
    console.log(value);
    setNewTodo(value);
  };

  return (
    <TodoProvider>
      <TodoListPresenter
        onSubmit={submitInput}
        onChange={changeInput}
        inputValue={newTodo}
      />
    </TodoProvider>
  );
};
