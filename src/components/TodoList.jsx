import { TodoListStyled } from "./styles/TodoListStyled";
import Todos from "./Todos";
import TodoListFooter from "./TodoListFooter";
import TodoEntry from "./TodoEntry";

const TodoList = () => {
  return (
    <>
      <TodoEntry />
      <TodoListStyled>
        <Todos />
        <TodoListFooter />
      </TodoListStyled>
    </>
  );
};

export default TodoList;
