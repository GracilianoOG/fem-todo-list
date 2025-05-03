import { useContext, useState } from "react";
import Todo from "./Todo";
import TodoContext from "../context/TodoContext";
import { NoTodo } from "./styles/NoTodoStyled";

const Todos = () => {
  const { getTodos, filter } = useContext(TodoContext);
  const todos = getTodos(filter);

  const [dragInfo, setDragInfo] = useState({
    from: null,
    to: null,
  });

  return (
    <>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <Todo
              id={todo.id}
              key={index}
              task={todo.task}
              isCompleted={todo.isCompleted}
              position={index}
              dragInfo={dragInfo}
              setDragInfo={setDragInfo}
            />
          ))}
        </ul>
      ) : (
        <NoTodo>No tasks yet, add your first todo!</NoTodo>
      )}
    </>
  );
};

export default Todos;
