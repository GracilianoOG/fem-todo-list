import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { task: "Complete online JavaScript course" },
    { task: "Jog around the park 3x" },
    { task: "10 minutes meditation" },
    { task: "Read for 1 hour" },
    { task: "Pick up groceries" },
    { task: "Complete Todo App on Frontend Mentor" },
  ]);

  return (
    <>
      <Header />
      <TodoList todos={todos} />
    </>
  );
};

export default App;
