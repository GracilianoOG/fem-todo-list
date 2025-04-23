import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoContext from "./context/TodoContext";

const App = () => {
  const [todos, setTodos] = useState([
    { task: "Complete online JavaScript course" },
    { task: "Jog around the park 3x" },
    { task: "10 minutes meditation" },
    { task: "Read for 1 hour" },
    { task: "Pick up groceries" },
    { task: "Complete Todo App on Frontend Mentor" },
  ]);

  const addTodo = task => {
    setTodos([...todos, { task }]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
      }}
    >
      <Header />
      <TodoList />
    </TodoContext.Provider>
  );
};

export default App;
