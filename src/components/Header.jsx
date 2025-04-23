import moon from "../assets/icons/icon-moon.svg";
import TodoEntry from "./TodoEntry";
import "./Header.css";

const Header = ({ addTodo }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h1 className="header__title">Todo</h1>
          <button className="theme-switcher">
            <img className="theme-switcher__icon" src={moon} alt="" />
          </button>
        </div>
        <TodoEntry addTodo={addTodo} />
      </div>
    </header>
  );
};

export default Header;
