import { useContext, useState } from "react";
import "./TodoEntry.css";
import TodoContext from "../context/TodoContext";

const TodoEntry = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useContext(TodoContext);

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
