import { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "../context/TodoContext";
import { NoTodo } from "./styles/NoTodoStyled";
import { useDnd } from "../hooks/useDnd";
import FilterContext from "../context/FilterContext";

const Todos = () => {
  const { getTodos } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);
  const [dragInfo, handlers] = useDnd();
  const todos = getTodos(filter);

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
              handlers={handlers}
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
