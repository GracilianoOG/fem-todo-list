import { useState } from "react";
import { placeholderTodos } from "../placeholderTodos";

export const useTodos = () => {
  const [todos, setTodos] = useState(placeholderTodos);
  const [filter, setFilter] = useState("ALL");

  const addTodo = task => {
    setTodos([...todos, { id: self.crypto.randomUUID(), task }]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getTodos = (status = "ALL") => {
    if (status === "ALL") {
      return todos;
    } else if (status === "COMPLETED") {
      return todos.filter(todo => todo.isCompleted);
    } else if (status === "ACTIVE") {
      return todos.filter(todo => !todo.isCompleted);
    }
  };

  const completeTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
          return todo;
        }
        return todo;
      })
    );
  };

  return {
    addTodo,
    deleteTodo,
    completeTodo,
    getTodos,
    setTodos,
    filter,
    setFilter,
  };
};
