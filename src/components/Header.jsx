import {
  HeaderContentStyled,
  HeaderStyled,
  HeaderTitleStyled,
} from "./styles/HeaderStyled";
import TodoEntry from "./TodoEntry";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <HeaderContentStyled>
          <HeaderTitleStyled>Todo</HeaderTitleStyled>
          <ThemeSwitcher />
        </HeaderContentStyled>
        <TodoEntry />
      </div>
    </HeaderStyled>
  );
};

export default Header;
