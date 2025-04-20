import cross from "../assets/icons/icon-cross.svg";

const Todo = ({ text }) => {
  return (
    <div className="todo">
      <button className="todo__btn"></button>
      <p className="todo__text">{text}</p>
      <button className="todo__close">
        <img className="todo__icon" src={cross} alt="Close" />
      </button>
    </div>
  );
};

export default Todo;
