import Todo from "./Todo";
import TodoPanel from "./TodoPanel";
import "./TodoList.css";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { task: "Complete online JavaScript course" },
    { task: "Jog around the park 3x" },
    { task: "10 minutes meditation" },
    { task: "Read for 1 hour" },
    { task: "Pick up groceries" },
    { task: "Complete Todo App on Frontend Mentor" },
  ]);

  return (
    <div className="todo-list container round">
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} task={todo.task} />
        ))}
      </ul>
      <footer className="todo-list__footer">
        <p className="todo-list__completed">5 items left</p>
        <TodoPanel />
        <button className="todo-list__clear">Clear Completed</button>
      </footer>
    </div>
  );
};

export default TodoList;
