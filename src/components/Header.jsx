import moon from "../assets/icons/icon-moon.svg";
import TodoEntry from "./TodoEntry";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h1 className="header__title">Todo</h1>
          <button className="theme-switcher">
            <img className="theme-switcher__icon" src={moon} alt="" />
          </button>
        </div>
        <TodoEntry />
      </div>
    </header>
  );
};

export default Header;
