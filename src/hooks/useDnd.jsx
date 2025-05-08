import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

export const useDnd = () => {
  const { getTodos, setTodos } = useContext(TodoContext);

  const [dragInfo, setDragInfo] = useState({
    from: null,
    to: null,
  });

  const clearDragInfo = () => {
    setDragInfo({
      from: null,
      to: null,
    });
  };

  const handleDragStart = e => {
    e.stopPropagation();
    e.dataTransfer.setData("text/plain", "dummy");
    setDragInfo({
      ...dragInfo,
      from: e.target.dataset.position,
    });
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    if (!dragInfo.from) return;
    setDragInfo({
      ...dragInfo,
      to: e.currentTarget.dataset.position,
    });
  };

  const handleDragLeave = e => {
    e.stopPropagation();
    setDragInfo({
      ...dragInfo,
      to: null,
    });
  };

  const handleDrop = e => {
    e.stopPropagation();
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

  return [
    dragInfo,
    {
      handleDragStart,
      handleDragOver,
      handleDragLeave,
      handleDrop,
      clearDragInfo,
    },
  ];
};
