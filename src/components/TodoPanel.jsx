import FilterButton from "./FilterButton";
import { TodoPanelStyled } from "./styles/TodoPanelStyled";

const TodoPanel = () => {
  return (
    <TodoPanelStyled className="box round">
      <FilterButton filterName="ALL" text="All" />
      <FilterButton filterName="ACTIVE" text="Active" />
      <FilterButton filterName="COMPLETED" text="Completed" />
    </TodoPanelStyled>
  );
};

export default TodoPanel;
