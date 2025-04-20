import cross from "../assets/icons/icon-cross.svg";

const Todo = () => {
  return (
    <div className="todo">
      <button className="todo__btn"></button>
      <input
        className="todo__entry"
        type="text"
        placeholder="Create a new todo..."
      />
      <button className="todo__close">
        <img className="todo__icon" src={cross} alt="Close" />
      </button>
    </div>
  );
};

export default Todo;
