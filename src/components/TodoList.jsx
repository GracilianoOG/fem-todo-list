const TodoList = () => {
  return (
    <div
      className="todo-list round"
      style={{ margin: "-27px 25px 0", overflow: "hidden" }}
    >
      <div className="todo">
        <button className="todo__btn"></button>
        <input
          className="todo__entry"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
      <div className="todo">
        <button className="todo__btn"></button>
        <input
          className="todo__entry"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
    </div>
  );
};

export default TodoList;
