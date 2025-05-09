import { useEffect, useState } from "react";
import { placeholderTodos } from "../placeholderTodos";

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : placeholderTodos;
  });

  const addTodo = task => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: self.crypto.randomUUID(), task, isCompleted: false },
    ]);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
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
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
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
  };
};
