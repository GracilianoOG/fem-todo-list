import FilterButton from "./FilterButton";
import { TodoPanelStyled } from "./styles/TodoPanelStyled";

const TodoPanel = () => {
  return (
    <TodoPanelStyled>
      <FilterButton filterName="ALL" />
      <FilterButton filterName="ACTIVE" />
      <FilterButton filterName="COMPLETED" />
    </TodoPanelStyled>
  );
};

export default TodoPanel;
