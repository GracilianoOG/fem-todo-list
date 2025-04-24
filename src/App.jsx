import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoContext from "./context/TodoContext";
import { GlobalStyled } from "./components/styles/GlobalStyled";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: self.crypto.randomUUID(),
      task: "Complete online JavaScript course",
      isCompleted: true,
    },
    {
      id: self.crypto.randomUUID(),
      task: "Jog around the park 3x",
      isCompleted: false,
    },
    {
      id: self.crypto.randomUUID(),
      task: "10 minutes meditation",
      isCompleted: false,
    },
    {
      id: self.crypto.randomUUID(),
      task: "Read for 1 hour",
      isCompleted: false,
    },
    {
      id: self.crypto.randomUUID(),
      task: "Pick up groceries",
      isCompleted: false,
    },
    {
      id: self.crypto.randomUUID(),
      task: "Complete Todo App on Frontend Mentor",
      isCompleted: false,
    },
  ]);

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

  return (
    <TodoContext.Provider
      value={{
        setTodos,
        addTodo,
        deleteTodo,
        completeTodo,
        getTodos,
        filter,
        setFilter,
      }}
    >
      <GlobalStyled />
      <Header />
      <TodoList />
    </TodoContext.Provider>
  );
};

export default App;
