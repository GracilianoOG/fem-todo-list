import { useContext, useState } from "react";
import "./TodoEntry.css";
import TodoContext from "../context/TodoContext";
import {
  TodoEntryInputStyled,
  TodoEntryStyled,
} from "./styles/TodoEntryStyled";

const TodoEntry = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleClick = () => {
    addTodo(task);
    setTask("");
  };

  return (
    <TodoEntryStyled className="box round">
      <button className="todo__btn" onClick={handleClick}></button>
      <TodoEntryInputStyled
        type="text"
        placeholder="Create a new todo..."
        value={task}
        onChange={e => setTask(e.target.value)}
      />
    </TodoEntryStyled>
  );
};

export default TodoEntry;
