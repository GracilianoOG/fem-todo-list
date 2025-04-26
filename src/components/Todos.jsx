import { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "../context/TodoContext";
import { NoTodo } from "./styles/NoTodoStyled";

const Todos = () => {
  const { getTodos, filter } = useContext(TodoContext);
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
            />
          ))}
        </ul>
      ) : (
        <NoTodo className="box">No tasks yet, add your first todo!</NoTodo>
      )}
    </>
  );
};

export default Todos;
