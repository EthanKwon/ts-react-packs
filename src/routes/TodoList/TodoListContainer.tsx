import React, { useCallback, useState } from "react";
import TodoListPresenter from "./TodoListPresenter";
import { v4 as uuidv4 } from "uuid";
import { TodoListProps } from "./TodoInterface";

export default () => {
  const [todoList, setTodoList] = useState<TodoListProps>({
    todos: []
  });
  const [newTodo, setNewTodo] = useState(""); //새로운 리스트 추가

  // Insert 함수
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
    setNewTodo(value);
  }, []);

  // Toggle 함수
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

  // Delete 함수

  const deleteTodo = useCallback(
    (id: string) => {
      setTodoList({
        todos: todoList.todos.filter(todo => todo.id !== id)
      });
    },
    [todoList]
  );

  return (
    <TodoListPresenter
      onSubmit={submitInput}
      onChange={changeInput}
      onToggle={toggleComplete}
      onDelete={deleteTodo}
      inputValue={newTodo}
      todoList={todoList}
    />
  );
};
