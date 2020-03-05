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
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  inputValue: string;
}
