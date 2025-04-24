import { useContext } from "react";
import cross from "../assets/icons/icon-cross.svg";
import "./Todo.css";
import TodoContext from "../context/TodoContext";

const Todo = ({ id, task, isCompleted }) => {
  const { deleteTodo, completeTodo } = useContext(TodoContext);

  const handleMarkClick = () => {
    completeTodo(id);
  };

  return (
    <li className="todo box">
      <button
        className={`todo__btn ${!isCompleted ? "" : "todo__btn--selected"}`}
        onClick={handleMarkClick}
      ></button>
      <p
        className={`todo__text ${!isCompleted ? "" : "todo__text--completed"}`}
      >
        {task}
      </p>
      <button className="todo__close" onClick={() => deleteTodo(id)}>
        <img className="todo__icon" src={cross} alt="Close" />
      </button>
    </li>
  );
};

export default Todo;
