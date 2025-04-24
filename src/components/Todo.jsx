import { useContext } from "react";
import cross from "../assets/icons/icon-cross.svg";
import "./Todo.css";
import TodoContext from "../context/TodoContext";
import { ButtonStyled } from "./styles/ButtonStyled";
import {
  TodoDeleteIconStyled,
  TodoDeleteStyled,
  TodoStyled,
  TodoTextStyled,
} from "./styles/TodoStyled";

const Todo = ({ id, task, isCompleted }) => {
  const { deleteTodo, completeTodo } = useContext(TodoContext);

  const handleCompleteClick = () => completeTodo(id);
  const handleDeleteClick = () => deleteTodo(id);

  return (
    <TodoStyled className="todo box">
      <ButtonStyled
        $selected={isCompleted}
        onClick={handleCompleteClick}
      ></ButtonStyled>
      <TodoTextStyled $crossed={isCompleted}>{task}</TodoTextStyled>
      <TodoDeleteStyled onClick={handleDeleteClick}>
        <TodoDeleteIconStyled src={cross} alt="Delete task" />
      </TodoDeleteStyled>
    </TodoStyled>
  );
};

export default Todo;
