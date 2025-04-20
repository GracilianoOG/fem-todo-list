import moon from "../assets/icons/icon-moon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Todo</h1>
        <button className="theme-switcher">
          <img className="theme-switcher__icon" src={moon} alt="" />
        </button>
      </div>
      <div className="todo round">
        <button className="todo__btn"></button>
        <input
          className="todo__entry"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
    </header>
  );
};

export default Header;
