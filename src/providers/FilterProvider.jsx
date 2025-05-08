import { useState } from "react";
import FilterContext from "../context/FilterContext";

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("ALL");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
