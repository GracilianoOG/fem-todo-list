const TodoEntry = () => {
  return (
    <div className="todo-entry box round">
      <button className="todo__btn"></button>
      <input
        className="todo-entry__input"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default TodoEntry;
