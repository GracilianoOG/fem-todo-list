import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { FilterButtonStyled } from "./styles/FilterButtonStyled";

const FilterButton = ({ filterName, text }) => {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <FilterButtonStyled
      $selected={filter === filterName}
      onClick={() => setFilter(filterName)}
    >
      {text}
    </FilterButtonStyled>
  );
};

export default FilterButton;
