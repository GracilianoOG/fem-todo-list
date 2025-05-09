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
  const MAX_LENGTH = 200;

  const handleSubmit = e => {
    e.preventDefault();
    const formattedTask = task.trim();
    if (!formattedTask) return;
    addTodo(formattedTask);
    setTask("");
  };

  const handleChange = e => {
    const task = e.target.value;
    if (task.length > MAX_LENGTH) return;
    setTask(task);
  };

  return (
    <TodoEntryStyled onSubmit={handleSubmit}>
      <ButtonStyled />
      <TodoEntryInputStyled
        type="text"
        placeholder="Create a new todo..."
        value={task}
        maxLength={MAX_LENGTH}
        onChange={handleChange}
      />
    </TodoEntryStyled>
  );
};

export default TodoEntry;
