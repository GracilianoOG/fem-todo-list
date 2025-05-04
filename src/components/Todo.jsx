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
  const { deleteTodo, completeTodo, getTodos, setTodos, filter } =
    useContext(TodoContext);

  const handleCompleteClick = () => completeTodo(id);
  const handleDeleteClick = () => deleteTodo(id);

  const clearDragInfo = () => {
    setDragInfo({
      from: null,
      to: null,
    });
  };

  const handleDragStart = e => {
    e.stopPropagation();
    setDragInfo({
      ...dragInfo,
      from: e.target.dataset.position,
    });
    console.log("dragging from " + dragInfo.from);
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragInfo({
      ...dragInfo,
      to: e.currentTarget.dataset.position,
    });
    console.log("Dragging to " + dragInfo.to);
  };

  const handleDragLeave = e => {
    e.stopPropagation();
    console.log("Leave " + dragInfo.to);
    setDragInfo({
      ...dragInfo,
      to: null,
    });
  };

  const handleDrop = e => {
    e.stopPropagation();
    console.log(`Dropped ${dragInfo.from} on ${dragInfo.to}`);
    if (!dragInfo.from || dragInfo.from === dragInfo.to) {
      clearDragInfo();
      return;
    }
    const draggedTodo = getTodos()[dragInfo.from];
    const otherTodos = getTodos().filter((_, i) => i !== Number(dragInfo.from));
    const updatedTodos = [
      ...otherTodos.slice(0, dragInfo.to),
      draggedTodo,
      ...otherTodos.slice(dragInfo.to),
    ];
    setTodos(updatedTodos);
    clearDragInfo();
  };

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
