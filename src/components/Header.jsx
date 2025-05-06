import {
  HeaderContentStyled,
  HeaderStyled,
  HeaderTitleStyled,
} from "./styles/HeaderStyled";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <HeaderContentStyled>
          <HeaderTitleStyled>Todo</HeaderTitleStyled>
          <ThemeSwitcher />
        </HeaderContentStyled>
      </div>
    </HeaderStyled>
  );
};

export default Header;
