import { createContext } from "react";

type hookType = {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
};

export const TodoContext = createContext<hookType | null>(null);
