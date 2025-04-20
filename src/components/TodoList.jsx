import Todo from "./Todo";

const TodoList = () => {
  return (
    <div
      className="todo-list round"
      style={{ margin: "-27px 25px 0", overflow: "hidden" }}
    >
      <Todo />
      <Todo />
    </div>
  );
};

export default TodoList;
