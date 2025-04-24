import moon from "../assets/icons/icon-moon.svg";
import {
  HeaderContentStyled,
  HeaderStyled,
  HeaderTitleStyled,
} from "./styles/HeaderStyled";
import TodoEntry from "./TodoEntry";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <HeaderContentStyled>
          <HeaderTitleStyled>Todo</HeaderTitleStyled>
          <button className="theme-switcher">
            <img className="theme-switcher__icon" src={moon} alt="" />
          </button>
        </HeaderContentStyled>
        <TodoEntry />
      </div>
    </HeaderStyled>
  );
};

export default Header;
