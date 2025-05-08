import { useEffect, useState } from "react";
import { placeholderTodos } from "../placeholderTodos";

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : placeholderTodos;
  });
  const [filter, setFilter] = useState("ALL");

  const addTodo = task => {
    setTodos([
      ...todos,
      { id: self.crypto.randomUUID(), task, isCompleted: false },
    ]);
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
