import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  if (context === null) {
    throw new Error("useTodos does not have a valid context value");
  }
  return context;
};
