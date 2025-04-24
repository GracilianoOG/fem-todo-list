import { useContext, useState } from "react";
import cross from "../assets/icons/icon-cross.svg";
import "./Todo.css";
import TodoContext from "../context/TodoContext";

const Todo = ({ id, task, isCompleted }) => {
  const [isTodoCompleted, setIsTodoCompleted] = useState(isCompleted);
  const { deleteTodo, completeTodo } = useContext(TodoContext);

  const handleMarkClick = () => {
    setIsTodoCompleted(prevSelected => !prevSelected);
    completeTodo(id);
  };

  return (
    <li className="todo box">
      <button
        className={`todo__btn ${!isTodoCompleted ? "" : "todo__btn--selected"}`}
        onClick={handleMarkClick}
      ></button>
      <p
        className={`todo__text ${
          !isTodoCompleted ? "" : "todo__text--completed"
        }`}
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
