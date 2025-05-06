import { TodoListStyled } from "./styles/TodoListStyled";
import Todos from "./Todos";
import TodoListFooter from "./TodoListFooter";
import TodoEntry from "./TodoEntry";
import { MainStyled } from "./styles/MainStyled";

const TodoList = () => {
  return (
    <MainStyled className="container">
      <TodoEntry />
      <TodoListStyled>
        <Todos />
        <TodoListFooter />
      </TodoListStyled>
    </MainStyled>
  );
};

export default TodoList;
