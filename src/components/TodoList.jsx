import Todo from "./Todo";
import TodoPanel from "./TodoPanel";
import "./TodoList.css";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { setTodos, getTodos, filter } = useContext(TodoContext);

  const getTodosLeft = () => getTodos("ACTIVE").length;

  const clearCompleted = () => setTodos(getTodos("ACTIVE"));

  return (
    <div className="todo-list container round">
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
      <footer className="todo-list__footer">
        <p className="todo-list__completed">{getTodosLeft()} items left</p>
        <TodoPanel />
        <button className="todo-list__clear" onClick={clearCompleted}>
          Clear Completed
        </button>
      </footer>
    </div>
  );
};

export default TodoList;
