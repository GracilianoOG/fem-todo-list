import { memo, useContext } from "react";
import { FilterButtonStyled } from "./styles/FilterButtonStyled";
import FilterContext from "../context/FilterContext";

const FilterButton = memo(({ filterName }) => {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <FilterButtonStyled
      $selected={filter === filterName}
      onClick={() => setFilter(filterName)}
    >
      {filterName.toLowerCase()}
    </FilterButtonStyled>
  );
});

export default FilterButton;
