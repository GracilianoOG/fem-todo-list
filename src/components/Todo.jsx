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
import FilterContext from "../context/FilterContext";

const Todo = ({ id, task, isCompleted, position, dragInfo, handlers }) => {
  const { deleteTodo, completeTodo } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);
  const {
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    clearDragInfo,
  } = handlers;

  const handleCompleteClick = () => completeTodo(id);
  const handleDeleteClick = () => deleteTodo(id);

  return (
    <TodoStyled
      data-position={position}
      draggable={filter === "ALL"}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragEnd={clearDragInfo}
      $isDragOver={dragInfo.to && Number(dragInfo.to) === position}
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
