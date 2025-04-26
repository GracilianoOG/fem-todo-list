import moon from "../assets/icons/icon-moon.svg";
import sun from "../assets/icons/icon-sun.svg";
import {
  HeaderContentStyled,
  HeaderStyled,
  HeaderTitleStyled,
} from "./styles/HeaderStyled";
import TodoEntry from "./TodoEntry";

const Header = ({ isDark, setIsDark }) => {
  return (
    <HeaderStyled>
      <div className="container">
        <HeaderContentStyled>
          <HeaderTitleStyled>Todo</HeaderTitleStyled>
          <button className="theme-switcher" onClick={() => setIsDark(!isDark)}>
            <img
              className="theme-switcher__icon"
              src={!isDark ? moon : sun}
              alt=""
            />
          </button>
        </HeaderContentStyled>
        <TodoEntry />
      </div>
    </HeaderStyled>
  );
};

export default Header;
