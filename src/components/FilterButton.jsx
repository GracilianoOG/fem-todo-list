import { useContext } from "react";
import { FilterButtonStyled } from "./styles/FilterButtonStyled";
import FilterContext from "../context/FilterContext";

const FilterButton = ({ filterName, text }) => {
  const { filter, setFilter } = useContext(FilterContext);

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
