import React, { useCallback, useState } from "react";
import TodoListPresenter from "./TodoListPresenter";
import { v4 as uuidv4 } from "uuid";
import { TodoListProps } from "./TodoInterface";

export default () => {
  const [todoList, setTodoList] = useState<TodoListProps>({
    todos: []
  });
  const [newTodo, setNewTodo] = useState(""); //새로운 리스트 추가

  const submitInput = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTodoList({
      ...todoList,
      todos: [
        ...todoList.todos,
        { id: uuidv4(), text: newTodo, isComplete: false }
      ]
    });
    setNewTodo("");
  };

  const changeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;
    console.log(value);
    setNewTodo(value);
  }, []);

  const toggleComplete = useCallback(
    (id: string) => {
      setTodoList({
        todos: todoList.todos.map(todo =>
          todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        )
      });
    },
    [todoList]
  );

  return (
    <TodoListPresenter
      onSubmit={submitInput}
      onChange={changeInput}
      onToggle={toggleComplete}
      inputValue={newTodo}
      todoList={todoList}
    />
  );
};
