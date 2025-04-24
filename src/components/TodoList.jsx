import Todo from "./Todo";
import TodoPanel from "./TodoPanel";
import "./TodoList.css";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { todos, setTodos, getTodos, filter } = useContext(TodoContext);

  const getTodosLeft = () => todos.filter(todo => !todo.isCompleted).length;

  const clearCompleted = () =>
    setTodos(todos.filter(todo => !todo.isCompleted));

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
