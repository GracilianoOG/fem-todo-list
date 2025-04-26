import { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "../context/TodoContext";

const Todos = () => {
  const { getTodos, filter } = useContext(TodoContext);

  return (
    <ul>
      {getTodos(filter).map((todo, index) => (
        <Todo
          id={todo.id}
          key={index}
          task={todo.task}
          isCompleted={todo.isCompleted}
        />
      ))}
    </ul>
  );
};

export default Todos;
