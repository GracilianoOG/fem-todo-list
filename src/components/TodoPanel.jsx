import "./TodoPanel.css";
import FilterButton from "./FilterButton";

const TodoPanel = () => {
  return (
    <div className="todo-panel box round">
      <FilterButton filterName="ALL" text="All" />
      <FilterButton filterName="ACTIVE" text="Active" />
      <FilterButton filterName="COMPLETED" text="Completed" />
    </div>
  );
};

export default TodoPanel;
