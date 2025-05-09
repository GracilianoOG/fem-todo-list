import { useMemo, useState } from "react";
import FilterContext from "../context/FilterContext";

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("ALL");
  const value = useMemo(() => {
    return { filter, setFilter };
  }, [filter]);

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
