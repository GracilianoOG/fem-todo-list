import { TodoListStyled } from "./styles/TodoListStyled";
import Todos from "./Todos";
import TodoListFooter from "./TodoListFooter";

const TodoList = () => {
  return (
    <TodoListStyled className="container round">
      <Todos />
      <TodoListFooter />
    </TodoListStyled>
  );
};

export default TodoList;
