import { useContext } from "react";
import cross from "../assets/icons/icon-cross.svg";
import "./Todo.css";
import TodoContext from "../context/TodoContext";
import { ButtonStyled } from "./styles/ButtonStyled";

const Todo = ({ id, task, isCompleted }) => {
  const { deleteTodo, completeTodo } = useContext(TodoContext);

  const handleCompleteClick = () => completeTodo(id);
  const handleDeleteClick = () => deleteTodo(id);

  return (
    <li className="todo box">
      <ButtonStyled
        $selected={isCompleted}
        onClick={handleCompleteClick}
      ></ButtonStyled>
      <p className={`todo__text ${isCompleted && "todo__text--completed"}`}>
        {task}
      </p>
      <button className="todo__close" onClick={handleDeleteClick}>
        <img className="todo__icon" src={cross} alt="Delete task" />
      </button>
    </li>
  );
};

export default Todo;
