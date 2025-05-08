import { TodoListStyled } from "./styles/TodoListStyled";
import Todos from "./Todos";
import TodoListFooter from "./TodoListFooter";
import TodoEntry from "./TodoEntry";
import FilterContext from "../context/FilterContext";
import { useState } from "react";

const TodoList = () => {
  const [filter, setFilter] = useState("ALL");

  return (
    <>
      <TodoEntry />
      <TodoListStyled>
        <FilterContext.Provider value={{ filter, setFilter }}>
          <Todos />
          <TodoListFooter />
        </FilterContext.Provider>
      </TodoListStyled>
    </>
  );
};

export default TodoList;
