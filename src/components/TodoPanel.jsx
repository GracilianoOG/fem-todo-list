import { useContext } from "react";
import "./TodoPanel.css";
import TodoContext from "../context/TodoContext";

const TodoPanel = () => {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <div className="todo-panel box round">
      <button
        className={`todo-panel__btn ${
          filter === "ALL" && "todo-panel__btn--selected"
        }`}
        onClick={() => setFilter("ALL")}
      >
        All
      </button>
      <button
        className={`todo-panel__btn ${
          filter === "ACTIVE" && "todo-panel__btn--selected"
        }`}
        onClick={() => setFilter("ACTIVE")}
      >
        Active
      </button>
      <button
        className={`todo-panel__btn ${
          filter === "COMPLETED" && "todo-panel__btn--selected"
        }`}
        onClick={() => setFilter("COMPLETED")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoPanel;
