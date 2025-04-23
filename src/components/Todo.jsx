import { useState } from "react";
import cross from "../assets/icons/icon-cross.svg";
import "./Todo.css";

const Todo = ({ task }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleMarkClick = () => {
    setIsCompleted(prevSelected => !prevSelected);
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
      <button className="todo__close">
        <img className="todo__icon" src={cross} alt="Close" />
      </button>
    </li>
  );
};

export default Todo;
