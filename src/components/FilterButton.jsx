import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const FilterButton = ({ filterName, text }) => {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <button
      className={`todo-panel__btn ${
        filter === filterName && "todo-panel__btn--selected"
      }`}
      onClick={() => setFilter(filterName)}
    >
      {text}
    </button>
  );
};

export default FilterButton;
