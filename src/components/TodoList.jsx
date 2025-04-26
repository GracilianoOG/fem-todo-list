import TodoPanel from "./TodoPanel";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import {
  TodoListClearStyled,
  TodoListFooterStyled,
  TodoListLeftStyled,
  TodoListStyled,
} from "./styles/TodoListStyled";
import Todos from "./Todos";

const TodoList = () => {
  const { setTodos, getTodos } = useContext(TodoContext);

  const getTodosLeft = () => getTodos("ACTIVE").length;
  const clearCompleted = () => setTodos(getTodos("ACTIVE"));

  return (
    <TodoListStyled className="container round">
      <Todos />
      <TodoListFooterStyled>
        <TodoListLeftStyled>{getTodosLeft()} items left</TodoListLeftStyled>
        <TodoPanel />
        <TodoListClearStyled onClick={clearCompleted}>
          Clear Completed
        </TodoListClearStyled>
      </TodoListFooterStyled>
    </TodoListStyled>
  );
};

export default TodoList;
