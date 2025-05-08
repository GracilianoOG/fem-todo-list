import TodoContext from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";

const TodoProvider = ({ children }) => {
  return (
    <TodoContext.Provider value={{ ...useTodos() }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
