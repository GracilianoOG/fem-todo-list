import { useContext } from "react";
import "./TodoPanel.css";
import TodoContext from "../context/TodoContext";

const TodoPanel = () => {
  const { setFilter } = useContext(TodoContext);

  return (
    <div className="todo-panel box round">
      <button className="todo-panel__btn" onClick={() => setFilter("ALL")}>
        All
      </button>
      <button className="todo-panel__btn" onClick={() => setFilter("ACTIVE")}>
        Active
      </button>
      <button
        className="todo-panel__btn"
        onClick={() => setFilter("COMPLETED")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoPanel;
