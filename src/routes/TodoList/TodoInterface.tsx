import { ReactNode } from "react";

// Context Interface

export interface ContextProps {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
}

export interface TodoProvProps {
  children: ReactNode;
}

// Presenter Interface

export interface TodoPresProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  inputValue: string;
  todoList: TodoListProps;
}

//TodoList Interface

export interface TodoListProps {
  todos: TodoItemProps[];
}

export interface TodoItemProps {
  id: string;
  text: string;
  isComplete: boolean;
}

export interface TodoItemComponentProps {
  todoItem: TodoItemProps;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
