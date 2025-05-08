import { TodoListStyled } from "./styles/TodoListStyled";
import Todos from "./Todos";
import TodoListFooter from "./TodoListFooter";
import TodoEntry from "./TodoEntry";
import FilterProvider from "../providers/FilterProvider";

const TodoList = () => {
  return (
    <>
      <TodoEntry />
      <TodoListStyled>
        <FilterProvider>
          <Todos />
          <TodoListFooter />
        </FilterProvider>
      </TodoListStyled>
    </>
  );
};

export default TodoList;
