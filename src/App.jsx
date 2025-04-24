import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoContext from "./context/TodoContext";

const App = () => {
  const [todos, setTodos] = useState([
    { id: self.crypto.randomUUID(), task: "Complete online JavaScript course" },
    { id: self.crypto.randomUUID(), task: "Jog around the park 3x" },
    { id: self.crypto.randomUUID(), task: "10 minutes meditation" },
    { id: self.crypto.randomUUID(), task: "Read for 1 hour" },
    { id: self.crypto.randomUUID(), task: "Pick up groceries" },
    {
      id: self.crypto.randomUUID(),
      task: "Complete Todo App on Frontend Mentor",
    },
  ]);

  const addTodo = task => {
    setTodos([...todos, { id: self.crypto.randomUUID(), task }]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        deleteTodo,
      }}
    >
      <Header />
      <TodoList />
    </TodoContext.Provider>
  );
};

export default App;
