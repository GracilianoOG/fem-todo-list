import { useState } from "react";
import "./TodoEntry.css";

const TodoEntry = ({ addTodo }) => {
  const [task, setTask] = useState("");

  return (
    <div className="todo-entry box round">
      <button className="todo__btn" onClick={() => addTodo(task)}></button>
      <input
        className="todo-entry__input"
        type="text"
        placeholder="Create a new todo..."
        value={task}
        onChange={e => setTask(e.target.value)}
      />
    </div>
  );
};

export default TodoEntry;
