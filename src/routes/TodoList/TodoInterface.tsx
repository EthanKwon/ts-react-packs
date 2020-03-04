import { ReactNode } from "react";

// Context Interface

export interface ContextProps {
  state: {
    toDos: any;
    completed: any;
  };
  dispatch: React.Dispatch<ActionProps>;
}

export interface TodoProvProps {
  children: ReactNode;
}

export interface ActionProps {
  id: string;
  type: string;
  payload: string;
}

// Presenter Interface

export interface TodoPresProps {
  inputChangeFC: (e: React.FormEvent<HTMLInputElement>) => void;
  inputValue: string;
}
