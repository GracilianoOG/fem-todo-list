import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import {
  TodoEntryInputStyled,
  TodoEntryStyled,
} from "./styles/TodoEntryStyled";
import { ButtonStyled } from "./styles/ButtonStyled";

const TodoEntry = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleClick = () => {
    addTodo(task);
    setTask("");
  };

  return (
    <TodoEntryStyled className="box round">
      <ButtonStyled onClick={handleClick}></ButtonStyled>
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
