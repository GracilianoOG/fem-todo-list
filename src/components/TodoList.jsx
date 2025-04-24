import Todo from "./Todo";
import TodoPanel from "./TodoPanel";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import {
  TodoListClearStyled,
  TodoListFooterStyled,
  TodoListLeftStyled,
  TodoListStyled,
} from "./styles/TodoListStyled";

const TodoList = () => {
  const { setTodos, getTodos, filter } = useContext(TodoContext);

  const getTodosLeft = () => getTodos("ACTIVE").length;
  const clearCompleted = () => setTodos(getTodos("ACTIVE"));

  return (
    <TodoListStyled className="container round">
      <ul>
        {getTodos(filter).map((todo, index) => (
          <Todo
            id={todo.id}
            key={index}
            task={todo.task}
            isCompleted={todo.isCompleted}
          />
        ))}
      </ul>
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
