import { useContext } from "react";
import cross from "../assets/icons/icon-cross.svg";
import TodoContext from "../context/TodoContext";
import { ButtonStyled } from "./styles/ButtonStyled";
import {
  TodoDeleteIconStyled,
  TodoDeleteStyled,
  TodoStyled,
  TodoTextStyled,
} from "./styles/TodoStyled";

const Todo = ({ id, task, isCompleted, position, dragInfo, setDragInfo }) => {
  const { deleteTodo, completeTodo } = useContext(TodoContext);

  const handleCompleteClick = () => completeTodo(id);
  const handleDeleteClick = () => deleteTodo(id);

  const handleDragStart = e => {
    setDragInfo({
      ...dragInfo,
      from: e.target.dataset.position,
    });
    console.log("dragging from " + dragInfo.from);
  };

  const handleDragOver = e => {
    e.preventDefault();
    setDragInfo({
      ...dragInfo,
      to: e.currentTarget.dataset.position,
    });
    console.log("Dragging to " + dragInfo.to);
  };

  const handleDragLeave = () => {
    console.log("Leave " + dragInfo.to);
    setDragInfo({
      ...dragInfo,
      to: null,
    });
  };

  const handleDrop = () => {
    console.log(`Dropped ${dragInfo.from} on ${dragInfo.to}`);
    setDragInfo({
      ...dragInfo,
      to: null,
    });
  };

  return (
    <TodoStyled
      data-position={position}
      draggable={true}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <ButtonStyled
        $selected={isCompleted}
        onClick={handleCompleteClick}
      ></ButtonStyled>
      <TodoTextStyled $crossed={isCompleted} onClick={handleCompleteClick}>
        {task}
      </TodoTextStyled>
      <TodoDeleteStyled onClick={handleDeleteClick}>
        <TodoDeleteIconStyled src={cross} alt="Delete task" />
      </TodoDeleteStyled>
    </TodoStyled>
  );
};

export default Todo;
