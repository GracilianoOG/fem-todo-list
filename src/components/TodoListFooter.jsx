import { useContext } from "react";
import {
  TodoListClearStyled,
  TodoListFooterStyled,
  TodoListLeftStyled,
} from "./styles/TodoListStyled";
import TodoPanel from "./TodoPanel";
import TodoContext from "../context/TodoContext";

const TodoListFooter = () => {
  const { setTodos, getTodos } = useContext(TodoContext);

  const getTodosLeft = () => getTodos("ACTIVE").length;
  const clearCompleted = () => setTodos(getTodos("ACTIVE"));

  return (
    <TodoListFooterStyled>
      <TodoListLeftStyled>{getTodosLeft()} items left</TodoListLeftStyled>
      <TodoPanel />
      <TodoListClearStyled onClick={clearCompleted}>
        Clear Completed
      </TodoListClearStyled>
    </TodoListFooterStyled>
  );
};

export default TodoListFooter;
