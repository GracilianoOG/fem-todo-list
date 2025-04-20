import Todo from "./Todo";

const TodoList = () => {
  return (
    <div
      className="todo-list round"
      style={{ margin: "-27px 25px 0", overflow: "hidden" }}
    >
      <Todo text="Complete online JavaScript course" />
      <Todo text="Jog around the park 3x" />
      <Todo text="10 minutes meditation" />
      <Todo text="Read for 1 hour" />
      <Todo text="Pickup groceries" />
      <Todo text="Complete Todo App on Frontend Mentor" />
    </div>
  );
};

export default TodoList;
