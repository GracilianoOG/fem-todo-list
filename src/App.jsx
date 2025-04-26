import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoContext from "./context/TodoContext";
import { GlobalStyled } from "./components/styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import DarkModeContext from "./context/DarkModeContext";
import { placeholderTodos } from "./placeholderTodos";

const App = () => {
  const [todos, setTodos] = useState(placeholderTodos);

  const [filter, setFilter] = useState("ALL");
  const [isDark, setIsDark] = useState(false);

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
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
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
        <DarkModeContext.Provider value={{ isDark, setIsDark }}>
          <Header />
        </DarkModeContext.Provider>
        <TodoList />
      </TodoContext.Provider>
    </ThemeProvider>
  );
};

export default App;
